import { useEffect, useState } from "react";

export default function useFetch(searchTerm) {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (searchTerm == "") return;
    setIsLoading(true);
    setError(false);
    try {
      const url = `https://openlibrary.org/search.json?q=${searchTerm}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Something went wrong");
      }
      const result = await response.json();
      setData(result.docs);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchData();
    }, 4000);
    console.log(timeOutId);

    return () => {
      console.log("return timeoutId ", timeOutId);
      clearTimeout(timeOutId);
    };
  }, [searchTerm]);

  return [loading, error, data];
}
