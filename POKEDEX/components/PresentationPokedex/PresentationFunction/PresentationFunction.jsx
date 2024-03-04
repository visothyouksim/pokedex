import React from "react";
import styles from "../PresentationPokedex.module.css";

function PresentationFunction() {
  return (
    <>
      <ul className={styles.presentationFunction}>
        <li>
          Recherche Instantanée par Nom: Ne perdez plus jamais de temps à
          chercher votre Pokémon préféré. Entrez simplement son nom pour accéder
          instantanément à une mine d'informations.
        </li>
        <li>
          Fiches Détaillées: Chaque Pokémon est unique, et notre Pokedex célèbre
          cette diversité.
        </li>
        <li>
          Toujours Plus à Découvrir: Nous nous engageons à enrichir constamment
          le Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à
          l'affût!
        </li>
      </ul>
    </>
  );
}

export default PresentationFunction;
