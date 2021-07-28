import React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div className="Card">
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/s600jj41gsex/U4IZCLq00wIhd4eQe9yd6/d2895fc649d487c792bf2e6864a80277/pexels-photo-574071-1.jpeg?w=768&h=509&q=50&fm=webp&fit=scale')",
        }}
      />
      <div className="mask-hover">
        <div className="card-content">
          <h1>Ce que nous offrons</h1>
          <ul>
            <li>DESIGN</li>
            <li>ELEGANCE</li>
            <li>SIMPLICITY</li>
          </ul>
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
