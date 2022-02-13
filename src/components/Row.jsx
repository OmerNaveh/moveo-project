import React from "react";
import trackLogo from "../assets/musicLogo.jpg";
export default function Row({ file }) {
  return (
    <div className="trackRow">
      <img className="trackLogo" src={trackLogo} alt="trackLogo"></img>
      <p className="trackName">
        {file.slice(0, file.length - 4).toUpperCase()}
      </p>
      <button className="muteBtn">Mute</button>
      <audio src={`/loop_files/${file}`} className="track"></audio>
    </div>
  );
}
