import interact from "interactjs";
/**
 * @params setProgress- setState from react
 * @params audioElems- array of all audio HTML elements
 **/
const dragNDrop = (setProgress, audioElems) => {
  const slider = interact(".tracksSlider"); // target elements with the "tracksSlider" class

  slider.draggable({
    // make the element fire drag events
    origin: "self",
    inertia: false,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent", // keep the drag coords within the parent element
      }),
    ],
    listeners: {
      move(event) {
        // call this listener on every dragmove
        let value = event.pageX;
        //limit max and min value
        if (value > 100) {
          value = 100;
        }
        if (value < 0) {
          value = 0;
        }
        //change progress bar based on position
        setProgress(value);
        // set audio elemnts current time based on dragNDrop slider position
        audioElems.forEach((audioElem) => {
          audioElem.currentTime =
            (audioElems[0].duration * Math.floor(value)) / 100;
        });
      },
    },
  });
};
export default dragNDrop;
