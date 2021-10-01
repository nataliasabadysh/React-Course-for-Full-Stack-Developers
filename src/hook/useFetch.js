import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = ({ url, fetchWithParam }) => {
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const data = [];

  return {
    data,
    error,
    loader,
    _fetchWithParams,
  };
};

/*
USE CASE

    const { data } = useFetch({ url: api.fetchJoke })
    console.log('fetch', data);

    const { data } = useFetch({ url: api.images() })
    console.log('fetch', data);
}
*/
