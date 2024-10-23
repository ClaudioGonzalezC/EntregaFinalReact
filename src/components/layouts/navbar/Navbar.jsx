import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container-nav ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <Link className="logo-plani" to="/">Plani</Link>
        <ul className="navbar-menu">
          {categories.map(({ title, path }) => (
            <li key={title} className="navbar-item">
              <Link to={path} aria-label={title}>{title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMode} className="toggle-mode">
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <Link className="cart" to="/cart" aria-label="Cart">
          <CartWidget />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
