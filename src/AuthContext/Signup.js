import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react"
import { UserAuth } from "./AuthProvider"
import "../App.css"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createuser,googlehandler } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await createuser(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  
function linktologin(e){
  e.preventDefault();
  navigate("/login")
}

  
  return (
    <div className="login border-2 flex flex-col  h-screen pt-24 items-center">
      <form
        className="border-2 rounded-md flex justify-center items-center pt-2 flex-col gap-7 w-80 h-80"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 h-10 w-60 pl-3 outline-none rounded-md"
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        
        <input
          className="border-2 h-10 w-60 pl-3 outline-none rounded-md "
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
       
        <button
          className="bg-blue-600 text-white border-none w-24 h-8 rounded-md"
          type="submit"
        >
          submit
        </button>
        <button onClick={googlehandler} className="border-none w-44 h-10 hover:bg-green-300 text-white bg-green-400 rounded-md p-1">signup with Google</button>
        <p className="text-blue-600 cursor-pointer"onClick={linktologin}>already have an account ?</p>
      </form>
      <p className="text-red-600 mt-8">{error}</p>
    </div>
  );
};

export default Signup;
