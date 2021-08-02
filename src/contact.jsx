import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import SimpleMap from "./GoogleMaps";

import './contact.css'

export default function Contact() {
  return (
    <div> <SimpleMap zoom={18} lat={36.850251} lng={10.157386} />
      <div className='Contact'>
        <div className="card-container">
          <ContactForm />
        </div>
        <div className='part-2'>
          <h1>Collaborer avec SGIT</h1>
          <h4>SGIT, société de service et solution, cherche à mettre les compétences et les connaissances de ces collaborateurs afin d'atteindre un objectif commun. </h4>
          <h1>Contact SGIT</h1>
          <h2> <i class="fas fa-map-marker-alt"></i>Adresse de la société :</h2>
          <h2><i class="fas fa-phone-alt"></i>Numéro de téléphone : </h2>
          <h2><i class="fas fa-envelope"></i>Adresse mail : </h2>
          <h2>Réseaux sociaux : </h2>
          <div className='reseaux-sociaux'><h3><i class="fab fa-facebook"></i>Facebook</h3>
            <h3><i class="fab fa-twitter"></i>Twitter</h3>
          </div>

          <h1> Horaire de travail </h1>
          <h2>Lundi - Vendredi: 8am à 6pm </h2>
          <h2>Samedi: 9am à 2pm </h2>
          <h2>Dimanche: Fermé </h2>
        </div>
      </div>
    </div>

  )
}
