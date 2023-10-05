import { GameQuery } from "../App";
import useData from "./useData";

export interface Games {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: Float32Array;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
