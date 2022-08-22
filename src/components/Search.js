import React from "react";
import { useState } from "react";

function Search() {
  const [searchGames, setSearchGames] = useState("");
  const handleSearchGame = (e) => {
    let value = e.target.value;
    setSearchGames(value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher jeux"
        onChange={handleSearchGame}
      />
    </div>
  );
}
export default Search;
