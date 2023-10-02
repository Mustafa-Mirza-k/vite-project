import { useEffect, useState } from "react";
import gamesService, { Games } from "../services/games-service";
import { CanceledError } from "axios";
interface Response {
    count: number;
    results: Games[];
  }
  
const useGames = () => {
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
            setError(err.message);
          });
        return () => cancel();
      }, []);

      return {games, errors};
}
export default useGames;
