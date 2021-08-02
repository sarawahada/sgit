import React from "react";
import "./about.css";
export default function About(props) {
    return (
        <div className="about">
            <div
                className="background-img"
                style={{
                    backgroundImage: `url('${props.url}')`,
                }}
            />
            <div className="mask-hover">
                <div className="about-content">
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
        <div className="about-content">
          <h1>about</h1>
          <ul>
            <li>Design</li>
            <li>Elegance</li>
            <li>Functionality</li>
          </ul>
        </div>
*/
