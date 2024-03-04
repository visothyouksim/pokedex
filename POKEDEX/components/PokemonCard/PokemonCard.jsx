import React, { useContext } from "react";
import styles from "../PokemonCard/PokemonCard.module.css";
import { PokemonTeamContext } from "../../src/PokemonTeamContext";

function PokemonCard({ pokemon }) {
  const { addToTeam } = useContext(PokemonTeamContext);

  const handleAddToTeam = () => {
    addToTeam(pokemon);
  };

  return (
    <>
      <div
        className={`card ${styles.card}`}
        key={pokemon.id}
        style={{ width: "400px" }}
      >
        <img src={pokemon.image} alt="" className="my-3" />
        <h5 className="text-center">{pokemon.name}</h5>
        <h6 className="text-center">Stats</h6>
        {/* ################################ STATS ############################################## */}
        <div className="d-flex justify-content-center justify-content-around">
          <p>
            <span className={styles.nameStat}>HP</span>
            <span className={styles.valueStat}>{pokemon.stats.HP}</span>
          </p>
          <p>
            <span className={styles.nameStat}>attack</span>
            <span className={styles.valueStat}>{pokemon.stats.attack}</span>
          </p>
        </div>
        {/* ########################################################################## */}
        <div className="d-flex justify-content-center justify-content-around">
          <p>
            <span className={styles.nameStat}>defense</span>
            <span className={styles.valueStat}>{pokemon.stats.defense}</span>
          </p>
          <p>
            <span className={styles.nameStat}>special_attack</span>
            <span className={styles.valueStat}>
              {pokemon.stats.special_attack}
            </span>
          </p>
        </div>
        {/* ########################################################################## */}
        <div className="d-flex justify-content-center justify-content-around">
          <p>
            <span className={styles.nameStat}>special_defense</span>
            <span className={styles.valueStat}>
              {pokemon.stats.special_defense}
            </span>
          </p>
          <p>
            <span className={styles.nameStat}>speed</span>
            <span className={styles.valueStat}>{pokemon.stats.speed}</span>
          </p>
        </div>
        {/* ############################## END STATS ############################################## */}

        {/* ################################ TYPES ############################################## */}
        <h6 className="text-center">Types</h6>
        <div className="d-flex justify-content-center justify-content-around">
          <img src={pokemon.apiTypes[0].image} alt="" className="w-25" />
          {pokemon.apiTypes.length > 1 && (
            <img src={pokemon.apiTypes[1].image} alt="" className="w-25" />
          )}
        </div>
        {/* ################################ END TYPES ############################################## */}
        <div className="d-flex justify-content-center my-5">
          <button
            type="button"
            onClick={handleAddToTeam}
            className="p-3 rounded-3"
          >
            Ajouter à l'équipe
          </button>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
