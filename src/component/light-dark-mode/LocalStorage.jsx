import { useEffect, useState } from 'react'

const LocalStorage = ({key, defaulValue}) => {
 const [value, setValue] = useState(()=>{
    let currentValue;
    try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaulValue))
    } catch (error) {
        console.log(error)
        currentValue = defaulValue
    }
 })
 useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
 },[key, value])

 return [value, setValue]
}

export default LocalStorage
