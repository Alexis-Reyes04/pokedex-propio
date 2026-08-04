import { useMemo } from 'react';
import usePokemonAPI from '../services/PokeApiService';
import ListOfPokemons from '../components/pokemon/List';

const PokemonList = () => {
  const { pokemonsLoaded, status, setOffsetAndLimit } = usePokemonAPI();

  const moveToPage = useMemo(() => (url) => {
    const query = new URL(url).searchParams;
    setOffsetAndLimit(Number(query.get('offset') ?? 0), Number(query.get('limit') ?? 20));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setOffsetAndLimit]);

  return (
    <section className="pokemonPage">
      <div className="page-heading">
        <span className="page-badge">Pokédex Nacional</span>
        <h2>Conoce a cada Pokémon</h2>
        <p>Explora la colección y descubre tu próximo Pokémon favorito.</p>
      </div>

      {status === "loading" && <div className="status-card">Cargando Pokémon...</div>}
      {status === "error" && <div className="status-card error">No se pudo cargar la Pokédex.</div>}
      {status === "idle" && pokemonsLoaded?.results && (
        <ListOfPokemons
          pokemonList={pokemonsLoaded.results}
          total={pokemonsLoaded.count}
          nextUrl={pokemonsLoaded.next}
          previousUrl={pokemonsLoaded.previous}
          changePageHandler={moveToPage}
        />
      )}
    </section>
  );
};

export default PokemonList;
