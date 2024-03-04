import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "./SearchBar/SearchBar";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des Pokémon:", error)
      );
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <h2 className="text-center">Liste des Pokémons</h2>
      <section className="d-flex row justify-content-center gap-3">
        <SearchBar onSearch={setSearchText} />
        {searchText
          ? filteredPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          : null}
      </section>
    </>
  );
}

export default PokemonList;
