import PropTypes from 'prop-types';
import './styles.scss';

// On sait que un composant React (qui reste une fonction), reçoit tous ses paramètres dans un même objet que l'on appelle props.
// const Header = props => {
// const { author, difficulty, thumbnail, title } = props
// On peut destructurer cette objet directement dans les paramètres de la fonction.
const Header = ({ author, difficulty, thumbnail, title }) => {
    return (
        <header className="header">
            <img alt={title} src={thumbnail} className="header-image" />
            <div className='header-content'>
                <h1 className='header-title'>{title}</h1>
                <p className='header-infos'>{author} - {difficulty}</p>
            </div>
        </header>
    )
}

Header.propTypes = {
    // Petite nouveauté, juste à savoir, on s'en servira peu pendant la formation. On peut spécifier si une propriété peut être vide ou non.
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Header;