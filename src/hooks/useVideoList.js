import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API } from "../utils/constant";

const useVideoList = (searchKeyword) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const data = await fetch(
        searchKeyword ? YOUTUBE_SEARCH_API + searchKeyword : YOUTUBE_VIDEO_API
      );
      if (data.status === 403) {
        // alert("Please try again as server is down for now");
        return false;
      }
      const json = await data.json();
      setVideos(json.items);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchKeyword]);

  return videos;
};

export default useVideoList;
