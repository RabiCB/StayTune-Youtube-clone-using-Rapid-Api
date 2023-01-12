import React from 'react'
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
const Coding = () => {
    const [videos, setVideos] = useState([]);
  
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '14729427b2msh749fc5b0edc3045p1a1855jsn732f149d044f',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      useEffect(()=>{
        fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=4UZrsTqkcW4&t&part=id%2Csnippet&type=video&maxResults=50', options)
        .then(response => response.json())
        .then(response => setVideos(response.items))
        .catch(err => console.error(err));
    
      },[])
  return (
    <>
    <div className="grid grid-cols-5 max-md:grid-cols-2 max-md:grid-rows-16 grid-rows-7 pt-6 gap-6 pl-6 pr-6 ">
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
        ):(
          <p>videos not found</p>
        )}
      </div>
    </>

  )
}

export default Coding