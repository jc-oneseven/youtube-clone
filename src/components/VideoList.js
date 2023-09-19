import React from "react";
import useVideoList from "../hooks/useVideoList";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const videos = useVideoList();

  return (
    <>
      {videos.length === 0 && (
        <div className="flex flex-col items-center justify-center p-10">
          <img
            className="w-[400px]"
            src="https://img.freepik.com/premium-vector/data-search-found-illustration-concept_108061-574.jpg"
            alt="no data found"
          />
          <h1 className="text-4xl my-2"> Opps! </h1>
          <p>No Results available to show right now. Please try again later.</p>
        </div>
      )}
      <div className="py-4 grid grid-cols-[repeat(auto-fill,240px)] gap-4">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoList;
