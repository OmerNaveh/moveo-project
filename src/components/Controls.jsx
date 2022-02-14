import React, { useRef, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export default function Controls() {
  const [isLoop, setIsLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const replayElem = useRef(null);
  const playMusic = () => {
    document.querySelectorAll(".track").forEach((track) => {
      track.play();
      track.onended = () => {
        setIsPlaying(false);
      };
    });
    setIsPlaying(true);
  };
  const pauseMusic = () => {
    document.querySelectorAll(".track").forEach((track) => {
      track.pause();
    });
    setIsPlaying(false);
  };
  const replay = () => {
    if (!isLoop) {
      document.querySelectorAll(".track").forEach((track) => {
        track.loop = true;
      });
      replayElem.current.style.color = "blue";
    } else {
      document.querySelectorAll(".track").forEach((track) => {
        track.loop = false;
      });
      replayElem.current.style.color = "black";
    }
    setIsLoop(!isLoop);
  };
  const stopMusic = () => {
    document.querySelectorAll(".track").forEach((track) => {
      track.pause();
      track.currentTime = 0;
    });
    setIsPlaying(false);
  };
  return (
    <div className="controls">
      {!isPlaying ? (
        <PlayCircleIcon onClick={playMusic} />
      ) : (
        <PauseCircleIcon onClick={pauseMusic} />
      )}
      <StopCircleIcon onClick={stopMusic} />
      <ReplayCircleFilledIcon ref={replayElem} onClick={replay} />
    </div>
  );
}
