import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="Card">
      <div
        className="background-img"
        style={{
          backgroundImage: `url('${props.url}')`,
        }}
      />
      <div className="mask-hover">
        <div className="card-content">
          <h1>{props.description.toUpperCase()}</h1>
          <p></p>
          {/* <ul>
            <li>DESIGN</li>
            <li>ELEGANCE</li>
            <li>SIMPLICITY</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
/*
        <div className="card-content">
          <h1>Card</h1>
          <ul>
            <li>Design</li>
            <li>Elegance</li>
            <li>Functionality</li>
          </ul>
        </div>
*/
