import icon from "../../Images/icon-menu.svg";
import cart from "../../Images/icon-cart.svg";
import avatar from "../../Images/image-avatar.png";
import "./Header.css";
import { useState } from "react";
import { HeaderData } from "./HeaderData";
import close from "../../Images/close.png";
// import { CollectionsData } from "../Collections/CollectionsData";

function Header() {
  const [toggle, setToggle] = useState(false);

  const openNav = () => {
    setToggle(true);
    console.log(document.getElementById("Sidebar"));
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("close").style.display = "flex";
  };

  const closeNav = () => {
    setToggle(false);
    document.getElementById("Sidebar").style.width = "0";
  };
  
  return (
    <div className="header">
      <div className="header1">
        <div className="header--icon" onClick={openNav}>
          <img src={icon} className="icon" />
        </div>

        <div id="Sidebar">
          <div className="closeIcon" onClick={closeNav}>
            <img src={close} id="close" />
          </div>

          {toggle && (
            <ul className="SidebarList">
              {HeaderData.map((val, key) => {
                return (
                  <li
                    key={key}
                    className="row"
                    onClick={() => {
                      window.location.pathname = val.url;
                    }}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="header--title ">
          <h3>sneakers</h3>
          <div className="header--SidebarList">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            
          </div>
        </div>
      </div>

      <div className="header2">
        <div className="header--cart">
          <img src={cart}></img>
          <span>1</span>
        </div>
        <div className="header--image">
          <img src={avatar} className="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
