import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ZenContext from '../../contexts/zenContext';
import './Header.scss';

function Header({ categories }) {
  const { isZen, setIsZen } = useContext(ZenContext);

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <NavLink className={({ isActive }) => isActive ? "menu-link menu-link--selected" : "menu-link"} to="/">
          Accueil
        </NavLink>
        {categories.map(({ id, name, slug }) =>
          <NavLink key={id} className={({ isActive }) => isActive ? "menu-link menu-link--selected" : "menu-link"} to={slug}>
            {name}
          </NavLink>
        )}
        <button className="menu-btn" onClick={() => setIsZen(prevIsZen => !prevIsZen)} type="button">
          {isZen ? "Désactiver le mode zen" : "Activer le mode zen"}
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  isZen: PropTypes.bool,
  setIsZen: PropTypes.func
}

export default Header;