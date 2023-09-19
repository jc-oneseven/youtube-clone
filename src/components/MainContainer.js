import React from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";

const MainContainer = () => {
  return (
    <div className="p-3 auto-cols-fr mx-auto container">
      <ButtonList />
      <VideoList />
    </div>
  );
};

export default MainContainer;
