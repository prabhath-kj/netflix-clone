import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import { API_KEY, IMG_URL } from "../constants/Constant";
import GetTrailer from "../utils/GetTrailer";
import Youtube from "react-youtube";

export const Body = ({ genre, tittle }) => {
  const [getMovie, SetMovie] = useState([]);
  const [youtubeId, SetyoutubeId] = useState();
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    Axios.get("discover/movie?api_key=" + API_KEY + genre)
      .then((data) => {
        SetMovie(data?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col bg-gray-950 m-auto p-auto">
        <h1 className="flex py-5 lg:px-5 md:px-5 px-5 lg:mx-5 md:mx-5  font-normal text-xl text-white">
          {tittle}
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scrollbar">
          <div className="flex flex-nowrap  ml-5">
            {getMovie.map((obj) => {
              if (obj?.backdrop_path) {
                return (
                  <div key={obj.id} className="inline-block px-3">
                    <img
                      className="w-64 h-40 max-w-xs cursor-pointer overflow-hidden rounded-none shadow-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                      src={IMG_URL + `${obj.backdrop_path}`}
                      alt="movieimages"
                      onClick={() => {
                        GetTrailer(obj.id, SetyoutubeId);
                      }}
                    />
                    <h2 className="text-center text-white">
                      {obj.original_title}
                    </h2>
                  </div>
                );
              }
              return null; // Handle case when backdrop_path is undefined or null
            })}
          </div>
        </div>
       {youtubeId && <Youtube videoId={youtubeId} opts={opts} />}
      </div>

      <style>
        {`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
};
