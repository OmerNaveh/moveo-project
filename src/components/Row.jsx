import React, { useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { colorArray } from "../helpers/randomColorGenerator";

export default function Row({ file, index }) {
  const [mute, setMute] = useState(false);
  const audioElem = useRef(null);
  const muteControl = () => {
    audioElem.current.muted = !mute;
    setMute(!mute);
  };
  return (
    <div className="trackRow" style={{ backgroundColor: colorArray[index] }}>
      <p className="trackName">
        {file
          .slice(0, file.length - 4)
          .replaceAll("_", "-")
          .toUpperCase()}
      </p>
      {!mute ? (
        <VolumeUpIcon onClick={muteControl} />
      ) : (
        <VolumeOffIcon onClick={muteControl} />
      )}
      <audio
        ref={audioElem}
        src={`/loop_files/${file}`}
        className="track"
      ></audio>
    </div>
  );
}
