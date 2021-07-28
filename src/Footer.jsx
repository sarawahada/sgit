import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Shop</h2>
        <ul className="list-footer">
          <li>Home</li>
          <li>go to shop</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Creators</h2>
        <ul className="list-footer">
          <li>Reach us</li>
          <li>subscribe </li>
          <li>return item</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>More Info</h2>
        <ul className="list-footer">
          <li>social</li>
          <li>instagram</li>
          <li>facebook</li>
        </ul>
      </div>
    </footer>
  );
}
