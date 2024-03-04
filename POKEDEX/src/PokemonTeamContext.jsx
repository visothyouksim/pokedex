import React, { createContext, useState } from 'react';

export const PokemonTeamContext = createContext();

export const PokemonTeamProvider = ({ children }) => {
 const [team, setTeam] = useState([]);

 const addToTeam = (pokemon) => {
    setTeam([...team, pokemon]);
 };

 return (
    <PokemonTeamContext.Provider value={{ team, addToTeam }}>
      {children}
    </PokemonTeamContext.Provider>
 );
};