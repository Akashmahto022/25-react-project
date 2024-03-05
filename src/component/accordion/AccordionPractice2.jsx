import React, { useState } from "react";
import { data } from "./data";

const AccordionPractice2 = () => {
  const [answer, setAnswer] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleAnswer, setMultipleAnswer] = useState([]);

  const handleClick = (contentID) => {
    setAnswer(contentID === answer ? null : contentID);
  };

  const setMultiple = (contentID) => {
    const storeID = [...multipleAnswer];
    const multipleStoreIndexValue = storeID.indexOf(contentID);
    if (multipleStoreIndexValue === -1) {
      storeID.push(contentID);
    } else {
      storeID.splice(multipleStoreIndexValue, 1);
    }
    setMultipleAnswer(storeID);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection)
        }}
        className="bg-blue-900 p-2 text-white rounded-md"
      >
        Set To Multiple
      </button>
      <div>Enable Multiple Selection: {enableMultiSelection === false ? "false" : "true"}</div>
      {data.map((item) => (
        <div key={item.id}>
          <h1
            onClick={
              enableMultiSelection
                ? () => {
                    setMultiple(item.id);
                  }
                : () => {
                    handleClick(item.id);
                  }
            }
          >
            {item.question}
          </h1>
          {enableMultiSelection ? 
          ( multipleAnswer.indexOf(item.id) !== -1  && 
            <div>{item.answer}</div>)
           : (answer === item.id ? <p>{item.answer}</p> : null)}
        </div>
      ))}
    </div>
  );
};

export default AccordionPractice2;
