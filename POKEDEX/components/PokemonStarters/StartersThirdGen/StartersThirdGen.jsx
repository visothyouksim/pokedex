import React from "react";
import generations from "../../../starters";
import PokemonCard from "../../PokemonCard/PokemonCard";

function StartersThirdGen() {
  const genPokemon = generations[2].pokemons;

  return (
    <>
      <h3>Rubis et Saphir</h3>
      <section className="d-flex row justify-content-center gap-3">
        {genPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}

export default StartersThirdGen;
