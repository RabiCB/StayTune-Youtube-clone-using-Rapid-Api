import React from "react";
import dayjs from 'dayjs'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import { BsSearch } from "react-icons/bs";
import { Avatar } from "@mui/material";
import { UserAuth } from "../AuthContext/AuthProvider.js";

const Search = () => {
  const { search } = useParams();
  const {loggedcurrentUser}=UserAuth(); 
  const [searchString, setSearchstring] = useState("");
  const [searchedVideos, setSearchedVideos] = useState([]);
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '14729427b2msh749fc5b0edc3045p1a1855jsn732f149d044f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
  };
  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${
        search
      }&part=snippet&regionCode=US&maxResults=50&order=viewCount`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchedVideos(data.items);
        console.log(data.items);
      })
      .catch((err) => console.error(err));
  }, [search]);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${searchString}&part=snippet&regionCode=US&maxResults=50&order=viewCount`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchedVideos(data.items);
        console.log(data.items);
        console.log(data.items.snippet.channelId);
      })
      .catch((err) => console.error(err));
  };
  const navigate = useNavigate();
  const navigateme = () => {
    navigate("/");
  };
  const format=(date)=>{
   return dayjs(date).format(
    'D MMM,YYYY'
   )
  }

 
  return (
    <>
      <div className="navbar flex pl-6 pr-6  items-center h-16  justify-between bg-gray-400">
        <div className="flex items-center justify-center">
          <Sidebar />
          <h2
            onClick={navigateme}
            className="pl-20 font-semibold max-md:pl-10 cursor-pointer"
          >
            StayTune
          </h2>
        </div>
        <Avatar  src={`${loggedcurrentUser.photoURL===null?"https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000":loggedcurrentUser.photoURL}`} />
      </div>
      <h4 className="pl-10 mt-2 text-bg-grey-400">results for {search|| searchedVideos}...</h4>
      <div className="flex   gap-4 flex-col pl-10 pr-10 pt-4 ">
        {searchedVideos
          ? searchedVideos.map((s) => {
               const{id,videoId}=s;
              return (
                
                <div onClick={()=>navigator(s.id.videoId?s.id.videoId:id.videoId)} className="flex  max-sm:flex-col  gap-4">
                  <img
                    className="rounded-lg "
                    src={s.snippet.thumbnails.medium.url}
                    alt="thumbnails"
                  />
                  <div className="max-sm:flex flex-col flex max-sm:flex-col gap-2">
                    <h5 className="text-sm p-1 ">{s.snippet.title}</h5>
                    <p>{format(s.snippet.publishTime)}</p>
                    <span className="text-xs bg-black text-white w-20 rounded-sm flex items-center justify-center ">{s.snippet.channelTitle}</span>
                  </div>
                </div>
               
                
              );
            })
          : "no video found"}
      </div>
    </>
  );
};

export default Search;
