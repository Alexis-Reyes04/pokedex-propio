import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";

const links = [
  { text: "Inicio", to: "/home", classNames: [] },
  { text: "Pokédex", to: "/pokemon", classNames: [] }
];

const Layout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-topbar">
          <div className="brand-wrap">
            <span className="pokeball-logo" aria-hidden="true"></span>
            <h1 className="app-brand">PokéVerse</h1>
          </div>
          <Nav links={links} />
        </div>
      </header>

      <main className="app-main"><Outlet /></main>

      <footer className="app-footer">
        PokéVerse · Proyecto académico · Datos proporcionados por PokéAPI
      </footer>
    </div>
  );
};

export default Layout;
