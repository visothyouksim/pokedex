import React from "react";
import generations from "../../../starters";
import PokemonCard from "../../PokemonCard/PokemonCard";

function StartersSecondGen() {
  const genPokemon = generations[1].pokemons;

  return (
    <>
      <h3>Or et Argent</h3>
      <section className="d-flex row justify-content-center gap-3">
      {genPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
      </section>
    </>
  );
}

export default StartersSecondGen;
