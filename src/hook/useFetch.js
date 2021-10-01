import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api";

export const useFetch = () => {
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const _fetchWithParams = (query, page) => {
    axios
      .get(api.images(query, page))
      .then((res) => {
        setLoader(true);
        setResponse(res);
      })
      .catch((error) => setError(error))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    axios
      .get(api.images())
      .then((res) => {
        setLoader(true);
        setResponse(res);
      })
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
