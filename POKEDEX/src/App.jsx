import React from "react";
import PresentationPokedex from "../components/PresentationPokedex/PresentationPokedex";
import PokemonStarters from "../components/PokemonStarters/PokemonStarters";
import PokemonList from "../components/PokemonList/PokemonList";
import { PokemonTeamProvider } from "./PokemonTeamContext";
import PokemonTeam from "../components/PokemonTeam/PokemonTeam";

function App() {
  return (
    <>
      <PokemonTeamProvider>
        <div className="container">
          {/* ##################################### PRESENTATION POKEDEX ##################################### */}
          <div className="presentation">
            <PresentationPokedex />
          </div>
          {/* ##################################### END PRESENTATION POKEDEX ##################################### */}
          {/* #################################################################################################################### */}
          {/* ##################################### POKEMON STARTERS ##################################### */}
          <div className="starters">
            <PokemonStarters />
          </div>
          {/* ##################################### END POKEMON STARTERS ##################################### */}
          {/* #################################################################################################################### */}
          {/* ##################################### POKEMON LIST ##################################### */}
          <div className="pokeList">
            <PokemonList />
          </div>
          {/* ##################################### END POKEMON LIST ##################################### */}
          <div className="pokeTeam">
            <PokemonTeam />
          </div>
        </div>
      </PokemonTeamProvider>
    </>
  );
}

export default App;
