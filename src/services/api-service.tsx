import { AxiosRequestConfig } from "axios";
import clientApi from "./client-api";

class gamesService {
  getData<T>(endPoint: string, requestConfig?: AxiosRequestConfig) {
    let controller = new AbortController();
    let response = clientApi.get<T>(endPoint, { signal: controller.signal, ...requestConfig });
    return { response, cancel: () => controller.abort() };
  }
}

export default new gamesService();
