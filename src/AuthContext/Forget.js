import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { UserAuth } from "./AuthProvider";
import "../App.css"

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message,setMessage]=useState("")
  const {passwordreset}=UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await passwordreset(email);
      setMessage("please check your email")
    } catch (error) {
      setError(error.message);
    }
  };
 
  return (
    <div className="login border-2 flex flex-col  h-screen pt-36 items-center">
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
        <button
          className="bg-blue-600 text-white border-none w-40 h-8 rounded-md"
          type="submit"
        >
          Reset Password
        </button>
        <Link style={{textDecoration:'none'}} to="/login"><h5 className="forget-pass text-blue-500">If you have account login here?</h5></Link>
        <Link style={{textDecoration:'none'}} to="/signup"><button className="border-none w-40 h-10 hover:bg-green-300 text-white bg-green-400 rounded-md p-1">create account</button></Link>
   
    
      </form>
      <p className="text-red-600 mt-8">{error}</p>
      <p className="text-red-600 mt-8">{message}</p>
    </div>
  );
};

export default Forgetpassword;
