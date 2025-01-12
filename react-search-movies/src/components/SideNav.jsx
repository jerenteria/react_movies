import classes from "./SideNav.module.css";
import slideInArrow from "../images/slide-in-arrow.svg";
import slideOutArrow from "../images/slide-out-arrow.svg";
import { useState } from "react";
const SideNav = () => {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <>
      <div className={({ isOpen }) => (isOpen ? classes.open : undefined)} end>
        <nav>
          <p>Favorites</p>
          <p>My profile</p>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
