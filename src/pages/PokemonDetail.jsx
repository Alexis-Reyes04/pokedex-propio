import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => { setPokemon(data); setStatus("idle"); })
      .catch(() => setStatus("error"));
  }, [id]);

  if (status === "loading") return <div className="status-card">Cargando información...</div>;
  if (status === "error") return <div className="status-card error">No se encontró el Pokémon.</div>;

  return (
    <section className="detail-page">
      <Link to="/pokemon" className="back-link">← Volver a la Pokédex</Link>
      <div className="detail-card">
        <div className="detail-visual">
          <span>#{String(pokemon.id).padStart(3, "0")}</span>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </div>
        <div className="detail-info">
          <span className="page-badge">Ficha del Pokémon</span>
          <h2>{pokemon.name}</h2>
          <div className="type-row">
            {pokemon.types.map(({ type }) => <span key={type.name}>{type.name}</span>)}
          </div>
          <div className="measure-grid">
            <div><small>Altura</small><strong>{pokemon.height / 10} m</strong></div>
            <div><small>Peso</small><strong>{pokemon.weight / 10} kg</strong></div>
          </div>
          <h3>Estadísticas base</h3>
          <div className="stats-list">
            {pokemon.stats.map(({ base_stat, stat }) => (
              <div className="stat-row" key={stat.name}>
                <span>{stat.name}</span>
                <div className="stat-track"><div style={{ width: `${Math.min(base_stat, 100)}%` }}></div></div>
                <strong>{base_stat}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetail;
