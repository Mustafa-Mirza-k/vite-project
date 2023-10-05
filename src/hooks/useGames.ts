import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Games>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    selectedGenre
  );

export default useGames;
