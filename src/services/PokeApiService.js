import { useCallback, useEffect, useState } from "react";

const baseAPIUrl = 'https://pokeapi.co/api/v2/';

const usePokemonApi = () => {
  const [pokemonsLoaded, setPokemonsLoaded] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [status, setStatus] = useState("loading");

  const setOffsetAndLimit = useCallback((newOffset = 0, newLimit = 20) => {
    setOffset(newOffset);
    setLimit(newLimit);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    fetch(`${baseAPIUrl}pokemon?offset=${offset}&limit=${limit}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Error al consultar PokéAPI");
        return response.json();
      })
      .then((data) => {
        setPokemonsLoaded(data);
        setStatus("idle");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [offset, limit]);

  return { pokemonsLoaded, offset, limit, status, setOffsetAndLimit };
};

export default usePokemonApi;
