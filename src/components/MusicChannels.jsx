import React, { useEffect, useState } from "react";
import fileNamesArr from "../helpers/fileNamesArr.json";
import Row from "./Row";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import dragNDrop from "../helpers/dragndrop";
import Timer from "./Timer";

export default function MusicChannels() {
  const [progress, setProgress] = useState(0);
  const renderRows = () => {
    return fileNamesArr.map((file, index) => {
      return <Row key={file} file={file} index={index} />;
    });
  };
  useEffect(() => {
    const audioElems = document.querySelectorAll(".track");
    // set progress bar position based on the first playing audio element
    audioElems[0].addEventListener("timeupdate", () => {
      setProgress((audioElems[0].currentTime / audioElems[0].duration) * 100);
    });
    dragNDrop(setProgress, audioElems); //add dragNDrop functionality on slider
  }, []);

  return (
    <div className="musicChannels">
      <Timer />
      <div
        className="tracksSlider"
        style={{
          height: "100%",
          width: "1px",
          backgroundColor: "white",
          position: "absolute",
          left: `${progress}%`,
        }}
      >
        <BookmarkIcon className="svgSlider" />
      </div>
      {renderRows()}
    </div>
  );
}
