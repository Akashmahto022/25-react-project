import React, { useState } from "react";
import { data } from "./data";

const AccordionRevise = () => {
  const [answer, setAnswer] = useState([]);
  // const [multipleAnswer, setMultipleAnswer] = useState([])

  const handleClick = (contentId) => {
    const multipleValue = [...answer];
    const findindexofCurrentID = multipleValue.indexOf(contentId);
    if (findindexofCurrentID === -1) {
      multipleValue.push(contentId);
    } else {
      multipleValue.splice(findindexofCurrentID);
    }
    setAnswer(multipleValue);
    console.log(answer);
  };

  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.id} className="gap-4">
            <div className="m-4">
              <h1 className="text-xl font-semibold">Question</h1>
              <h1
                onClick={() => handleClick(item.id)}
                className="bg-blue-300 cursor-pointer"
              >
                {item.question}
              </h1>
              {answer.indexOf(item.id) !== -1 ? (
                <p className="bg-green-400">
                  <span className="text-xl font-semibold">Answer:</span>{" "}
                  {item.answer}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionRevise;
