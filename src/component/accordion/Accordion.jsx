import React, { useState } from "react";
import { data } from "./data";

const Accordion = () => {
  const [answer, setAnswer] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (contentId) => {
    console.log(contentId);
    setAnswer(contentId === answer ? null : contentId);
  };

  const handleMultySelection = (contentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(contentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(contentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(multiple);

  return (
    <div>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        MultiSelection
      </button>
      {data.map((dataItems) => (
        <div
          className="question"
          onClick={
            enableMultiSelection
              ? () => handleMultySelection(dataItems.id)
              : () => handleSingleSelection(dataItems.id)
          }
        >
          <h2>{dataItems.question}</h2>
          <span>+</span>
          {enableMultiSelection ? (
            multiple.indexOf(dataItems.id) !== -1 && <div>{dataItems.answer}</div>
          ) : answer === dataItems.id ? (
            <div>{dataItems.answer}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
