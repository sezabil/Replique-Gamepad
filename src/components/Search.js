import React from "react";
import { useState, useEffect } from "react";

function Search() {
  const [games, setGames] = useState([]);
  // const [searchGames, setSearchGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=d5024b21e1124d4abd459c0bacc15eab`)
      .then((response) => response.json())
      .then((json) => setGames(json));
  }, []);

  // const handleSearchGame = (e) => {

  //   let value=e.target.value;
  //   setSearchGames(value)
  // };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher jeux"
          // onChange={handleSearchGame}
        />
      </div>
      <div className="container">
        {games.results.map((element) => {
          return (
            <div className="mainBlock">
              <div className="blockImage">
                <img src={element.background_image} alt="" />
              </div>
              <h2>{element.name}</h2>
            </div>
          );
        })}
      </div>
      {/* <div className="container">
        {games.results.filter((val)=>{
          val.name.toLowerCase().includes(searchGames)
        }).map((element) => {
          return (
            <div className="mainBlock">
              <div className="blockImage">
                <img src={val.background_image} alt="" />
              </div>
              <h2>{val.name}</h2>
            </div>
          );
        })}
      </div> */}
    </>
  );
}
export default Search;
