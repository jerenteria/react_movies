import classes from "./SideNav.module.css";
import slideInArrow from "../images/slide-in-arrow.svg";
import slideOutArrow from "../images/slide-out-arrow.svg";
import { useState } from "react";
const SideNav = () => {
  // start off with nav being closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="side-bar-container">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button onClick={toggleNav} className="navToggleButton">Open</button>
          <nav className="nav-content">
            <p>Favorites</p>
            <p>My profile</p>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;
