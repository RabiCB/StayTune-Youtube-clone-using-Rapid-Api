import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Channel = () => {
    const {id}=useParams()
    console.log(id)
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "e9f0b7b894msh571dd818f5c6146p1e5a7ajsn31ce87ef5731",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

    useEffect(() => {
        fetch(
          `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`,
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
      }, [id]);
  return (
    <div>Channel</div>
  )
}

export default Channel