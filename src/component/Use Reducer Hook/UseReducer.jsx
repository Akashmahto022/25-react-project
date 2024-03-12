import React, {useReducer} from 'react'

const UseReducer = () => {
    const reducer = (state, action)=>{
        if(action.type === "increase"){
            return state = state + 1
        }
        if(action.type === "decrease"){
            if (state > 0) {
                return state = state - 1
            }
            else{
                return state
            }
        }

        return state
    }


    let initialValue = 0
    const [count , setCount] = useReducer(reducer, initialValue)



  return (
    <div className='flex justify-center items-center mt-[200px]'>
      <div className='flex justify-center items-center text-[70px] gap-[30px]'>
           <button onClick={()=> setCount({type: "increase"})}>+</button>
            <h1>{count}</h1>
            <button onClick={()=> setCount({type: "decrease"})}>-</button>
      </div>
    </div>
  )
}

export default UseReducer
