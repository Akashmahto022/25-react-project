import React from 'react'
import './star.css'
import StarIcon from "@mui/icons-material/Star";
import { useState } from 'react';

const Star = ({noOfStars = 10}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleEnter(value){
        setHover(value)
    }
    function handleLeave(){
        setHover(rating)
    }
    function handleClick(value){
        console.log(value)
        setRating(value)
    }


  return (
    <div>
      {[...Array(noOfStars)].map((_,index)=>{
        index += 1

        return(
            <StarIcon
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleEnter(index)}
            onMouseLeave={()=>handleLeave(index)}

            />
        )
      })}
    </div>
  )
}

export default Star
