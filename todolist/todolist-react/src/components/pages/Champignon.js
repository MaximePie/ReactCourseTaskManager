import React from "react";
import InfoChampignon from "../molecules/InfoChampignon";
import {useState} from "react";


/**
 * Un bouton pour ouvrir la modale ou la fermer
 * Une manière de savoir si la modale est censée être ouverte ou non. => Etat de la modale
 */

export default function Champignon() {
  const [isModalOpen, setOpenState] = useState(false);

  return (
    <div className="Champignon">
      <h4>Composant Champipi</h4>
      <button onClick={openModal}>
        Ouvrir la modale
      </button>
      <InfoChampignon
        chien={isModalOpen}
        title="Gauthier fait de la majs noire"
        content="La majs noire est une magie interdite."
        fermer={closeModal}
        // Voici une props "fermer". C'est une fonction.
        // Quand InfoChampignon déclenche "fermer",
        // "Fais closeModal".
      />
    </div>
  )
  function openModal() {
    setOpenState(true);
  }

  function closeModal() {
    setOpenState(false);
  }
}