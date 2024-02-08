import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
    const [currentChildren, setCurrentChildren] = useState({});

    const handleClick = (currentLable)=>{
        setCurrentChildren({
            ...currentChildren,
            [currentLable] :!currentChildren[currentLable]
        })
    }
    console.log(currentChildren)

  return (
    <li>
      <p>{item.lable}</p>
      {
        item && item.children && item.children.length ? <span onClick={()=>handleClick(item.lable)}>
            {currentChildren[item.lable] ? "-" : "+"}
        </span> : null
      }
      {item && item.children && item.children.length > 0  && currentChildren[item.lable] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
