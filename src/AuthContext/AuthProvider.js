import { createUserWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();



export function UserAuth(){
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [loggedcurrentUser,setloggedcurrentUser]=useState(localStorage.getItem("loggedcurrentUser"))
   
    const provider=new GoogleAuthProvider();
    const navigate=useNavigate()

    function createuser(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
   function logout(){
    return signOut(auth)



   }
   function passwordreset(email){
    return sendPasswordResetEmail(auth,email)
  }
  function googlehandler(){
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/")
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }
    
   useEffect(()=>{
    const unsuscribe=onAuthStateChanged(auth,(user)=>{
        setloggedcurrentUser(user)
    })
    return ()=>{
        unsuscribe()
    }

   })
    useEffect(()=>{
      localStorage.setItem("loggedcurrentUser",JSON.stringify(loggedcurrentUser))
    },)
   return(
    <AuthContext.Provider value={{createuser,loggedcurrentUser,login,logout,passwordreset,googlehandler}}>
       {children}
    </AuthContext.Provider>
   )

}

