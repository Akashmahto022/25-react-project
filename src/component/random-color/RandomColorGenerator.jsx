import React, { useState } from 'react'

const RandomColorGenerator = () => {
    const [color, setColor] = useState('red');
    const [typeOfColor, setTypeOfColor] = useState('rgb')

    const rgbRandomColorGenerator = ()=>{
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        console.log(r,g,b)
        const rbgColor = `rgb(${r},${g},${b})`
        setColor(rbgColor)
        
    }

    const hexRandomColorGenerator=()=>{
        let hexColor = "#"
        let number = "0123456789abcdef"
        for(let i=0; i<6; i++){
            hexColor +=number[Math.floor(Math.random() * 16)];
        }
        console.log(hexColor)
        setColor(hexColor)
    }

  return (
    <div style={{backgroundColor: color, height: "100vh"}}>
        <button className='bg-blue-700 text-white hover:bg-black p-2 rounded' onClick={()=>setTypeOfColor('hex')}>Hex Color Geneator</button>
        <button className='bg-blue-700 text-white hover:bg-black p-2 rounded' onClick={()=>setTypeOfColor('rgb')}>RGB Color Geneator</button>
        <button className='bg-blue-700 text-white hover:bg-black p-2 rounded' onClick={typeOfColor === 'rgb' ? rgbRandomColorGenerator : hexRandomColorGenerator}>Click for Color Geneator</button>
        <div>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColorGenerator
