import { Link } from "react-router";

const HomePage = () => (
  <section className="home-page">
    <div className="hero-copy">
      <span className="hero-kicker">Explora · Descubre · Colecciona</span>
      <h2>Tu Pokédex moderna está lista</h2>
      <p>
        Descubre Pokémon, revisa sus estadísticas y navega por una colección
        inspirada en la clásica Pokédex, con un estilo moderno y responsivo.
      </p>
      <Link to="/pokemon" className="primary-button">Explorar Pokédex</Link>
    </div>

    <div className="hero-visual" aria-label="Ilustración decorativa de Pokédex">
      <div className="device-screen">
        <span className="screen-label">POKÉDEX</span>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
        />
        <strong>#025 Pikachu</strong>
      </div>
    </div>
  </section>
);

export default HomePage;
