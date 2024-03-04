import PropTypes from 'prop-types';
import './Header.scss';

function Header({ categories, setIsZen, isZen }) {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>
        {categories.map(({ id, name }) =>
          <a key={id} className="menu-link" href="#header">
            {name}
          </a>
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