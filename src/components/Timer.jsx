import React from "react";

export default function Timer() {
  const createTimerByDuration = (duration) => {
    const elems = [];
    for (let i = 0; i <= duration; i++) {
      elems.push(<div key={i}>|</div>);
    }
    return elems;
  };
  return <div className="timeline">{createTimerByDuration(17)}</div>;
}
