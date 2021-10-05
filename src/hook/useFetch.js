import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { api } from "../api";

export const useFetch = () => {
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const _fetchWithParams = useCallback((query, page) => {
    setLoader(true);
    axios
      .get(api.images(query, page))
      .then((res) => setResponse(res))
      .catch((error) => setError(error))
      .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    setLoader(true);
    axios
      .get(api.images())
      .then((res) => setResponse(res))
      .catch((error) => setError(error))
      .finally(() => setLoader(false));
  }, []);

  const data = response && response.data && response.data.hits;

  return {
    data,
    error,
    loader,
    _fetchWithParams,
  };
};
