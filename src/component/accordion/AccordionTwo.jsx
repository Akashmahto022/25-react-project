import React, { useState } from "react";
import { data } from "./data";

const AccordionTwo = () => {
  const [answer, setAnswer] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiAnswer, setMultiAnswer] = useState([])

  const singleHandleClick = (contentId) => {
    setAnswer(contentId === answer ? null : contentId);
  };

  const multiHandleClick = (contentId) => {
    let cpyAnswer = [...multiAnswer]
    let findIndexOfCurrentId = cpyAnswer.indexOf(contentId)
    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1) cpyAnswer.push(contentId)
    else cpyAnswer.splice(findIndexOfCurrentId,1)
    setMultiAnswer(cpyAnswer)
    console.log(cpyAnswer);
};

  return (
    <div>
      Accordion two
      <div>
          <button onClick={()=>setEnableMultiSelection(true)} className="bg-blue-700 text-white hover:bg-black p-2 rounded">
            MultiSelection
          </button>
        <div>
          {data.map((items) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => multiHandleClick(items.id)
                  : () => singleHandleClick(items.id)
              }
            >
              <h3>{items.question}</h3>
              <span>+</span>
              {enableMultiSelection ? (multiAnswer.indexOf(items.id) !== -1 && <div>{items.answer}</div>) : answer === items.id ? <div>{items.answer}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionTwo;
