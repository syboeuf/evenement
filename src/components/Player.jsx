import React from "react";
import ReactPlayer from "react-player";

const Player = ({ path }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player fixed-bottom"
      url={path}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Player;
