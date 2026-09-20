import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="MovieExplorer home">
          <span className="brand-mark">M</span>
          <span>MovieExplorer</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Discover</NavLink>
        </div>

        <Link className="btn btn-primary nav-cta" to="/movies">Browse Movies</Link>
      </nav>
    </header>
  );
}
