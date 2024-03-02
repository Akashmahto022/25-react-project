import React, { useState } from 'react'
import {data} from "./data"
const AccordionPractice = () => {
    const [answer, setAnswer] = useState([])
    const handleClick = (contentID) =>{
        const storeID = [...answer]
        const indexStore = storeID.indexOf(contentID)
        if(indexStore === -1){
            storeID.push(contentID)
        }
        else{
            storeID.splice(indexStore)
        }
        setAnswer(storeID)
        console.log(answer)
    }

  return (
    <div>
      {data.map((item)=>(
        <div key={item.id}>
        <h1 className=' cursor-pointer' onClick={()=>handleClick(item.id)}>Question: {item.question}</h1>
        {answer.indexOf(item.id) !== -1 ? (
        <p>Answer: {item.answer}</p>
        ) : null}
        </div>
      ))}
    </div>
  )
}

export default AccordionPractice
