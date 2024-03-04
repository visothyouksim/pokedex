import React from "react";
import styles from "./SearchBar.module.css"; // Assurez-vous que le chemin est correct

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      {" "}
      {/* Utilisez la classe CSS importée */}
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={searchText}
        onChange={handleSearchChange}
        className={styles.searchBarInput} // Ajoutez cette ligne pour appliquer le style spécifique au champ de recherche
      />
    </div>
  );
}

export default SearchBar;
