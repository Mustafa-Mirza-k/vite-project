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

const useGames = () => useData<Games>("/games");

export default useGames;
