import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function Home({ page }) {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchGames, setSearchGames] = useState("");
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://api.rawg.io/api/games?key=d5024b21e1124d4abd459c0bacc15eab&page=${page}&search=${searchGames}`
      );
      setGames(result.data);

      setLoading(false);
    };
    fetchGames();
  }, [page, searchGames]);

  return loading ? (
    <p>Chargement en cour</p>
  ) : (
    <div className="App">
      <h1>Gamepad</h1>
      <Search setSearchGames={setSearchGames} />

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
    </div>
  );
}

export default Home;
