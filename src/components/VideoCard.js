import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="shadow rounded-md h-full">
      <img
        src={info?.snippet?.thumbnails.medium.url}
        alt={info?.snippet?.title}
      />
      <div className="p-4">
        <h6 to={"/watch"} className="font-bold line-clamp-2">
          {info?.snippet?.title}
        </h6>
        <h6>{info?.snippet?.channelTitle}</h6>
        <small> {info?.statistics?.viewCount} Views</small>
      </div>
    </div>
  );
};

export default VideoCard;
