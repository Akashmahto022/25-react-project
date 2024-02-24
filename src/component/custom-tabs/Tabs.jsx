import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0) 

    function handleClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

  return (
    <div className="wrapper">
      <div className="heading">
      {tabsContent.map((item, index) => (
          <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={()=>handleClick(index)} key={item.lable}>
            <span className="lable">{item.lable}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  );
};

export default Tabs;
