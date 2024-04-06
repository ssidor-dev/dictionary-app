import { useEffect, useState } from "react";

export function useFetch(query, searchParam, callback) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();

      async function fetchData() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
          );

          if (!res.ok)
            throw new Error("No Definitions Found for");
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Word not found");
          }

          setData(data);
          setError("");
        } catch (error) {
          setError(error.message);
          
        } finally {
          setIsLoading(false);
        }
      }

      // setting a guard clause to check is the negation of query.length
      // and sets the movies array to an empty array, the error message to an empty string, and returns early if this negation is true
      if (!query.length) {
        setData([]);
        setError("");
        return;
      }

      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query]
  );
  return { data, isLoading, error };
}
