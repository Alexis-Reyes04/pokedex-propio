import NavLink from "./NavLinks";

const Nav = ({ links }) => (
  <nav className="nav-root">
    <ul className="nav-list">
      {(links ?? []).map((link) => (
        <NavLink key={link.text} {...link} classNames={link.classNames ?? []} />
      ))}
    </ul>
  </nav>
);

export default Nav;
