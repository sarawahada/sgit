import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const [click, setClick] = useState();
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="navbar" style={{ backgroundColor: props.color }}>
      <h1 style={{ color: "#fff" }} className="logo">
        SGIT
      </h1>
      <ul>
        <li onClick={handleClick}>
          ACCEUIL
          {click ? (
            <ul>
              <li>item1</li>
              <li>item2</li>
            </ul>
          ) : (
            ""
          )}
        </li>

        <li>INFORMATIONS</li>
        <li>A PROPOS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}
export default Navbar;
