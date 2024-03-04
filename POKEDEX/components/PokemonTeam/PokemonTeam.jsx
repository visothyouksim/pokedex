import React, { useContext } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokemonTeamContext } from "../../src/PokemonTeamContext";

function PokemonTeam() {
  const { team } = useContext(PokemonTeamContext);

  return (
    <>
      <section className="my-5">
        <h2 className="text-center">Pokémon Team</h2>
        <section className="d-flex row justify-content-center gap-3">
          {team.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </section>
      </section>
    </>
  );
}

export default PokemonTeam;
