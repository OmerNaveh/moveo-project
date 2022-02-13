import React from "react";
import fileNamesArr from "../helpers/fileNamesArr.json";
import Row from "./Row";
export default function MusicChannels() {
  const renderRows = () => {
    return fileNamesArr.map((file, index) => {
      return <Row key={file} file={file} index={index} />;
    });
  };
  return <div>{renderRows()}</div>;
}
