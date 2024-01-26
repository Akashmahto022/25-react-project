import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(12)
    const [msg, setMsg] = useState("")

    function subValue(){
        if (value === 0) {
            setValue(value)
            setMsg(`not less then  ${value}`)
        }
        else{
        setValue(value - 1)
        }

    }
    function addValue(){
        if (value === 20) {
            setValue(value)
            setMsg(`not more then ${value}`)
        }
        else{
        setValue(value + 1)
        }

    }



  return (
    <div>
      <div style={{display: 'flex', gap: '22px', marginLeft: '45%'}}>
        <h1 style={{cursor: 'pointer'}} onClick={subValue}>-</h1>
        <h1>{value}</h1>
        <h1 style={{cursor: 'pointer'}} onClick={addValue}>+</h1>
        <h1>{value == 0 ? msg : null}</h1>
        <h1>{value == 20 ? msg : null}</h1>
      </div>
      
    </div>
  )
}

export default Counter
