import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiService from "../services/api-service";
interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { response, cancel } = apiService.getData<Response<T>>(endPoint);
    response
      .then(({ data }) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => cancel();
  }, []);

  return { data, errors, isLoading };
};
export default useData;
