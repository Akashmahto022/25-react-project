import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("red");

  const handleClickHexColor = () => {
    const letters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }
    console.log(hexColor)
    setColor(hexColor);
  };

  const handleClickRgbColor = ()=>{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(rgbColor)
  }



  return (
    <div style={{height: "100vh", backgroundColor: color }}>
      <button onClick={()=>setTypeOfColor('hex')}>HEX Color</button>
      <button onClick={()=> setTypeOfColor('rgb')}>RGB Color</button>
      <button onClick={typeOfColor === "rgb" ? handleClickRgbColor : handleClickHexColor}>Generate Random Color</button>
      <div>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
