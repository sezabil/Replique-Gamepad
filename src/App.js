import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppPagination from "./components/AppPagination";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(8);

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(
        `https://api.rawg.io/api/games?key=d5024b21e1124d4abd459c0bacc15eab&page=${page}`
      );
      setGames(result.data);
      setLoading(false);
    };
    fetchGames();
  }, [page]);

  // d5024b21e1124d4abd459c0bacc15eab

  return (
    games.length !== 0 && (
      <div className="App">
        <Header />
        <h1>Gamepad</h1>
        <AppPagination setPage={setPage} page={page} />
        {console.log(games)}
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
    )
  );
}

export default App;
