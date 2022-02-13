import React from "react";
import fileNamesArr from "../helpers/fileNamesArr.json";
import Row from "./Row";
export default function MusicChanels() {
  const renderRows = () => {
    return fileNamesArr.map((file) => {
      return <Row key={file} file={file} />;
    });
  };
  return <div>{renderRows()}</div>;
}
