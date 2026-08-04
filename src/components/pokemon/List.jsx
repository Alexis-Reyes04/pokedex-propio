import { useNavigate } from "react-router";

const typeColors = ["yellow", "blue", "green", "red", "purple", "orange"];

const List = ({ pokemonList, total, nextUrl, previousUrl, changePageHandler = () => {} }) => (
  <>
    <div className="list-summary">
      <span>{total?.toLocaleString()} Pokémon registrados</span>
      <span>Selecciona una tarjeta para ver detalles</span>
    </div>

    <section className="plList">
      {pokemonList?.map((pk, index) => (
        <ListItem name={pk.name} url={pk.url} index={index} key={pk.name} />
      ))}
    </section>

    <section className="pActions">
      <button disabled={!previousUrl} onClick={() => previousUrl && changePageHandler(previousUrl)}>← Atrás</button>
      <button disabled={!nextUrl} onClick={() => nextUrl && changePageHandler(nextUrl)}>Siguiente →</button>
    </section>
  </>
);

const ListItem = ({ name, url, index }) => {
  const navigateTo = useNavigate();
  const id = url.split('/').at(-2);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <article
      className={`PokemonCard card-${typeColors[index % typeColors.length]}`}
      onClick={() => navigateTo(`/pokemon/${id}`)}
      tabIndex="0"
      onKeyDown={(e) => e.key === "Enter" && navigateTo(`/pokemon/${id}`)}
    >
      <div className="card-number">#{String(id).padStart(3, "0")}</div>
      <div className="pokemon-image-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <h3>{name}</h3>
      <span className="view-detail">Ver información</span>
    </article>
  );
};

export default List;
