import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const menuitem = [
    {
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      title: "about",
      icon: <HomeIcon />,
    },
    {
      title: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      title: "contact",
      icon: <HomeIcon />,
    },
    {
      title: "user",
      icon: <HomeIcon />,
    },
    {
      title: "map",
      icon: <HomeIcon />,
    },
  ];
  return (
    <div className=" flex">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="bg-slate-800 text-white p-2">
        <div className="flex">
          <div style={{ display: isOpen ? "block" : "none" }}>
            <img
              src={
                "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708574400&semt=sph"
              }
              alt=""
              className="w-[120px] h-[100px]"
            />
          </div>
          <div>
            {isOpen === true ? (
              <CloseIcon onClick={toggleOpen} />
            ) : (
              <MenuIcon onClick={toggleOpen} />
            )}
          </div>
        </div>
        {menuitem.map((item, index) => (
          <div key={index} className="flex gap-4 mt-4 hover:bg-cyan-400 p-2">
            <div>{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
