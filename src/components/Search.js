import React from "react";

function Search({ setSearchGames }) {
  const handleSearchGame = (e) => {
    let value = e.target.value;
    setSearchGames(value);
    console.log(value);
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
