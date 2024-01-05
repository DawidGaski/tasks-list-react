import React from "react";
import { Control, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <Control>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </Button>
    </Control>
  );
};

export default Buttons;
