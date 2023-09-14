import clientApi from "./client-api";

export interface Games {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: Float32Array;
}

class gamesService {
  getGames<T>() {
    let controller = new AbortController();
    let response = clientApi.get<T>("/games", { signal: controller.signal });
    return { response, cancel: () => controller.abort() };
  }
}

export default new gamesService();
