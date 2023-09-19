import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSplice";
import useVideoList from "../hooks/useVideoList";
import ButtonList from "./ButtonList";

const SearchVideoCard = ({ info, type }) => {
  const cardCSSClasses = `${
    type === "channel"
      ? "items-center w-[200px]"
        ? type === "playlist"
        : ""
      : "shadow border border-gray-200 rounded-md"
  }`;

  return (
    <div className={`flex h-full ${cardCSSClasses}`}>
      <img
        src={info?.snippet?.thumbnails.medium.url}
        alt={info?.snippet?.title}
        className={type === "channel" && "w-[100px] h-[100px] rounded-full"}
      />
      <div className="p-4">
        <span> Playlist </span>
        <h6 to={"/watch"} className="font-bold line-clamp-2">
          {info?.snippet?.title}
        </h6>
        {/* <small> {info?.statistics?.viewCount} Views</small> */}
        <h6 className="my-2s">{info?.snippet?.channelTitle}</h6>
        <p> {info?.snippet?.description} </p>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const videos = useVideoList(searchParams.get("search_query"));
  console.log(videos);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-[1024px] max-w-full mx-auto p-4">
      <ButtonList />

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

      <div className="my-4 flex flex-col gap-5 ">
        {videos.map(
          (video) => {
            return (
              <div>
                {video.id.kind === "youtube#channel" && (
                  <SearchVideoCard info={video} type="channel" />
                )}

                {video.id.kind === "youtube#playlist" && (
                  <SearchVideoCard info={video} type="playlist" />
                )}

                {video.id.kind === "youtube#video" && (
                  <Link
                    key={video.id.videoId}
                    to={`/watch?v=${video.id.videoId}`}>
                    <SearchVideoCard info={video} />
                  </Link>
                )}
              </div>
            );
          }

          //   {video.id.kind === "youtube#channel" &&
          //   (<h2> Channel </h2>)}

          //   {
          //     video.id.kind === "youtube#playlist" &&
          //   (<h2> Playlist </h2>)
          // }

          //   (video.id.kind === "youtube#video" && (
          //     <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          //       <SearchVideoCard info={video} />
          //     </Link>
          //   )}
        )}
      </div>
    </div>
  );
};

export default SearchResults;
