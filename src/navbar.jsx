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
          <Link to="/">ACCEUIL</Link>

          {click ? (
            <ul>
              <li>item1</li>
              <li>item2</li>
            </ul>
          ) : (
            ""
          )}
        </li>

        <li>
          <Link to="/about">INFORMATIONS</Link>
        </li>
        <li>
          <Link to="/about">A PROPOS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
