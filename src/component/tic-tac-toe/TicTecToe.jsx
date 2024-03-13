import React, { useEffect, useState } from "react";

function Square({ value, onclick }) {
  return <button onClick={onclick} className="border-2 border-sky-700 text-[60px] h-[100px] text-center w-[100px] mt-[-4px] cursor-pointer bg-slate-100">{value}</button>;
}

const TicTecToe = () => {
    const [value, setValue] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState(true)
    const [winner, setWinner] = useState('')
    console.log(value)

    function handleClick(currentIndex){
        if (getWinner(value) || value[currentIndex]) return
        value[currentIndex] = turn ? "X" : "O"
        setTurn(!turn)
    }

    function getWinner(squares){
        const winnerPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        for(let i=0; i<winnerPatterns.length; i++){
            const [x, y, z] = winnerPatterns[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }
        return null
    }

    useEffect(()=>{
        if (!getWinner(value) && value.every(item => item !== "")) {
            setWinner("This is a draw || please restart the game")
        }
        else if(getWinner(value)){
            setWinner(`winner is ${getWinner(value)}`)
        }
        else{
            setWinner(`Next turn Is ${turn ? "X" : "O"}`)
        }
    },[value, turn])

    function restartGame(){
        setValue(Array(9).fill(""))
        setWinner("")
    }

  return (
    <div className="p-4 flex flex-col items-center">
    <h1 className="mb-2">Tic Toc Toe Game</h1>
      <div className="flex items-center">
        <Square value={value[0]} onclick={()=> handleClick(0)}/>
        <Square value={value[1]} onclick={()=> handleClick(1)}/>
        <Square value={value[2]} onclick={()=> handleClick(2)}/>
      </div>
      <div>
        <Square value={value[3]} onclick={()=> handleClick(3)}/>
        <Square value={value[4]} onclick={()=> handleClick(4)}/>
        <Square value={value[5]} onclick={()=> handleClick(5)}/>
      </div>
      <div>
        <Square value={value[6]} onclick={()=> handleClick(6)}/>
        <Square value={value[7]} onclick={()=> handleClick(7)}/>
        <Square value={value[8]} onclick={()=> handleClick(8)}/>
      </div>
      <h1 className="text-xl font-medium my-3">{winner}</h1>
      <button onClick={restartGame} className="bg-blue-700 px-4 py-2 rounded-md text-white text-xl">Restart</button>
    </div>  
  );
};

export default TicTecToe;
