import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import { BsSearch } from "react-icons/bs";
import { Avatar } from "@mui/material";
import {NavLink} from 'react-router-dom'
import { UserAuth } from "../AuthContext/AuthProvider.js";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [search, setsearch] = useState("");
  const navigate=useNavigate();
  const {logout,currentUser}=UserAuth();
  const [profile,setProfile]=useState(false)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '14729427b2msh749fc5b0edc3045p1a1855jsn732f149d044f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=I1Fp5ffyvWs&part=id%2Csnippet&type=video&maxResults=50', options)
    .then(response => response.json())
    .then(response => setVideos(response.items))
    .catch(err => console.error(err));

  },[])
 const hanldeSubmit=(e)=>{
  e.preventDefault();
  if(search){
    navigate(`/search/${search}`)
  }
  setsearch("")
}
 const handlelogout=async()=>{
  await logout()
  navigate("/login")
  

 }
  
 
  return (
    <>
      <div className="navbar flex pl-6 pr-6 max-sm:pl-4 max-sm:pr-4 items-center h-16  justify-between bg-gray-400">
        <div className="flex items-center justify-center">
          <Sidebar />
          <h2 className="pl-20 max-md:pl-12 ">StayTune</h2>
        </div>
        <form onSubmit={hanldeSubmit} className="flex rounded-sm bg-white max-md:w-50  items-center border-2">
          <input
          
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className=" pl-4 w-96 outline-none max-md:w-40 "
            placeholder="search.."
          />
          <BsSearch onClick={hanldeSubmit} className="Search w-10  cursor-pointer" />
        </form>
        <div className="relative" onClick={()=>setProfile(!profile)}>
        <Avatar className="cursor-pointer" />
        {
          profile?<div className="absolute  right-1 top-14 w-28  bg-slate-200 rounded-md flex justify-start  h-28">
            <ul className="flex flex-col gap-4 pl-2 pt-1">
              <li>email</li>
              <button className="bg-blue-600 text-white border-none w-16 h-8  rounded-md" onClick={handlelogout}>logout</button>
            </ul>
          </div>:null
        }
        </div>
      </div>
      <div className="grid grid-cols-5  max-sm:grid-cols-1 max-sm:grid-rows-32 max-md:grid-cols-2 max-md:grid-rows-16 grid-rows-7 pt-6 gap-6 pl-6 pr-6 ">
        {videos ? (
          videos.map((v) => {
             const {videoId,id}=v;
            return (
              <NavLink to={`v/${id.videoId}`}>
              <div className="flex flex-col">
                <div className="border-none rounded-md ">
                  <img
                    className="rounded-lg"
                    src={v.snippet.thumbnails.high.url}
                    alt="thumbail"
                  />
                </div>
                <div className="flex items-center flex-col ">
                  <h2 className="font-bold">{v.snippet.channelTitle}</h2>
                  <p>{v.snippet.title}</p>
                  <h6>{v.viewCount}</h6>
                </div>
              </div>
              </NavLink>
            );
          })
        ) : (
          <p>videos not found</p>
        )}
      </div>
    </>
  );
};

export default Home;
