import React, { useState } from 'react'
import {data} from "./data";

const AccordionPractice2 = () => {
    const [answer, setAnswer] = useState([])

    const handleClick =(contentID)=>{
        const storeValue = [...answer]
        const storeIndexOF = storeValue.indexOf(contentID)
        if (storeIndexOF === -1) {
            storeValue.push(contentID)
        }
        else{
            storeValue.splice(storeIndexOF)
        }
        setAnswer(storeValue)
    }

  return (
    <div className='p-4'>
      {
        data.map((item)=>(
            <div key={item.id}>
                <h1 onClick={()=>{handleClick(item.id)}}>{item.question}</h1>
                {answer.indexOf(item.id) !== -1 ? (
                <p>{ item.answer}</p>
                ) : null
                 }
            </div>
        ))
      }
    </div>
  )
}


export default AccordionPractice2
