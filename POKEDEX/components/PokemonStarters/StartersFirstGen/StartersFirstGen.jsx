import React from "react";
import generations from "../../../starters";
import PokemonCard from "../../PokemonCard/PokemonCard";

function StartersFirstGen() {
  const genPokemon = generations[0].pokemons;

  return (
    <>
      <h3>Rouge et Bleu</h3>
      <section className="d-flex row justify-content-center gap-3">
        {genPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}

export default StartersFirstGen;
