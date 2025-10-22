import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData.results || []);
      } catch (err) {
        setError(err);
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [url]);

  return { data, loading, error }; // return data, loading state, and error
};
