import React from "react";
import Footer from "./Footer";
import Card from "./Card";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className="image-header">
        <div
          className="background"
          style={{
            backgroundImage: `url("https://www.taskade.com/static_images/templates/pexels-startup-stock-photos-7097.jpg")`,
          }}
        >
          <div className="image-mask">
            <h1>DECOUVREZ NOTRE SOCIETE</h1>
          </div>
        </div>
      </div>
      {/* <div className="sup-triangle"></div> */}
      <div className="card-container">
        <Card
          description="Fortes Valeurs Ajoutees"
          url="https://images.ctfassets.net/s600jj41gsex/U4IZCLq00wIhd4eQe9yd6/d2895fc649d487c792bf2e6864a80277/pexels-photo-574071-1.jpeg?w=768&h=509&q=50&fm=webp&fit=scale"
        />
        <Card
          description="Decharge des Taches Monotones"
          url="https://miro.medium.com/max/2000/1*D4Zub-vsQsuAOKm9rEd-lg.jpeg"
        />
        <Card
          description="Allegement du Travail Quotidien"
          url="https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28155623/1071652068_Software-Developer.jpg"
        />
      </div>
      <div className="inf-triangle"></div>
      <div className="section-title">
        <h2>PLUS QUE DES PRODUITS DES SOLUTIONS CLES EN MAIN</h2>
      </div>
      <div className="flex-card-container">
        <div className="card-container2">
          <Card
            description="Logiciel de comptabilite"
            url="https://images.ctfassets.net/s600jj41gsex/U4IZCLq00wIhd4eQe9yd6/d2895fc649d487c792bf2e6864a80277/pexels-photo-574071-1.jpeg?w=768&h=509&q=50&fm=webp&fit=scale"
          />
          <Card
            description="logiciels de finances"
            url="https://miro.medium.com/max/2000/1*D4Zub-vsQsuAOKm9rEd-lg.jpeg"
          />
          <Card
            description="societe civile"
            url="https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28155623/1071652068_Software-Developer.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
