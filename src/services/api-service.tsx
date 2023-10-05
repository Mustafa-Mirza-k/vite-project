import clientApi from "./client-api";

class gamesService {
  getData<T>(endPoint: string) {
    let controller = new AbortController();
    let response = clientApi.get<T>(endPoint, { signal: controller.signal });
    return { response, cancel: () => controller.abort() };
  }
}

export default new gamesService();
