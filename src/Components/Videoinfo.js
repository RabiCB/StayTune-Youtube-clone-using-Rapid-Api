import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { BiLike } from "react-icons/bi";
import "../App.css";
import { Avatar } from "@mui/material";

const Videoinfo = () => {
  const { id } = useParams();
  const [videoinfo, setVideoinfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [read, setRead] = useState(false);
  const [showcomment, setShowcomment] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "14729427b2msh749fc5b0edc3045p1a1855jsn732f149d044f",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%20%2C%20snippet%20%2Cstatistics&id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setVideoinfo(data.items);
        console.log(data.items);
      })
      .catch((err) => console.error(err));
  }, [id]);
  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setComments(response.items);
        console.log(response.items);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div className=" navbar flex pr-6 pl-6  items-center h-16  justify-between bg-gray-400">
        <div className="flex items-center justify-center">
          <h2 className="font-semibold">StayTune</h2>
        </div>
        <Avatar className="cursor-pointer " />
      </div>
      <div className="flex items-center justify-center">
        {videoinfo.map((i) => {
          const { snippet, channelId } = videoinfo;

          return (
            <div>
              <div className="flex pt-6 items-center gap-6  flex-col ">
                <img
                  className="picturevideo rounded-md  max-md:pl-10   max-md:pr-10"
                  src={i.snippet.thumbnails.standard.url}
                  alt="thubnails"
                />
                
                <p className="max-sm:text-sm max-md:p-1">{i.snippet.title}</p>
                <div className="flex gap-4 items-center ">
                <span className="font-bold bg-black text-white rounded-sm pl-2 pr-2 cursor-pointer">
                  {i.snippet.channelTitle}
                </span>
                <span className="border-r-2 pr-2 border-slate-500">
                  {Math.round(i.statistics.likeCount)}
                </span>
                <BiLike className="cursor-pointer" />
                </div>
                <div className="flex relative  pb-2 rounded-md pl-4 pr-4 flex-col ml-4 mr-4  bg-slate-200">
                  <h2 className="text-slate-500 ">
                    {Math.round(i.statistics.viewCount)} views
                  </h2>
                  <p className="max-sm:text-xs">
                    {read
                      ? i.snippet.description
                      : `${
                          i.snippet.description
                            ? i.snippet.description.substring(0, 100)
                            : "no description"
                        }....`}
                  </p>
                  <button
                    className=" absolute font-semibold text-xs pt-3 right-1 bottom-0"
                    onClick={() => setRead(!read)}
                  >
                    {read ? "See less.." : "See more.."}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <h4 className=" rounded-sm inline-flex justify-center items-center pl-10 ">
          {comments.length === 0 ? "no comments" : "comments"}
        </h4>
        {comments.map((c) => {
          const { snippet, topLevelComment, authorProfileImageUrl } = comments;
          return (
            <div className=" ml-6 mr-6  pl-1 pb-2 pt-1 mt-6 border-2 rounded-md flex  flex-col  gap-2 bg-slate-200  ">
              <div className="flex gap-2 pl-2">
                <Avatar
                  src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  alt="authorprofile"
                />
                <div className="flex flex-col">
                  <p className="text-sm">
                    {c.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  </p>
                  <span className="text-xs">
                    {c.snippet.topLevelComment.snippet.publishedAt}
                  </span>
                </div>
              </div>
              <p className=" pl-14   text-xs text-slate-500">
                {c.snippet.topLevelComment.snippet.textDisplay}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videoinfo;
