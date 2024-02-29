import React, { useState } from 'react'
import {data} from './data'

const AccordionRevise = () => {
    const [answer, setAnswer] = useState(null);

    const handleClick = (contentId)=>{
        console.log(contentId)
        setAnswer(contentId === answer ? null : contentId)
    }

  return (
    <div>
      <div>
            {data.map((item)=>(
                <div key={item.id} className='gap-4'>
                    <h1 className='m-4'>Question</h1>
                    <div className='m-4'>
                    <h1 onClick={()=>handleClick(item.id)}>{item.question}</h1>
                    {answer === item.id ? (
                    <p>Answer: {item.answer}</p>
                    ) : null}
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default AccordionRevise
