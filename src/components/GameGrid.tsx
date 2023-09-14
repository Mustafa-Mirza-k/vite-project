import React, { useEffect, useState } from "react";
import gamesService, { Games } from "../services/games-service";
import { CanceledError } from "../services/client-api";

interface Response {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [errors, setError] = useState([]);

  useEffect(() => {
    const { response, cancel } = gamesService.getGames<Response>();
    response
      .then(({ data }) => {
        setGames(data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => cancel();
  }, []);

  return (
    <>
      {errors && <p>{errors}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
