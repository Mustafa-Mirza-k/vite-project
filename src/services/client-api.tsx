import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "664bc9eb1dfc429b92ac662820165389",
  },
});

export { CanceledError };
