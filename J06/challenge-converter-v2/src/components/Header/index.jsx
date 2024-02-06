import PropTypes from 'prop-types';
import './styles.scss';

// Je commente amount, il est utilisé pour la version input controllé.
const Header = ({ /*amount, */setAmount, defaultAmount }) => {
    return (
        <header className='header'>
            <h1 className='header-title'>Converter</h1>
            <p className='header-amount'>
                {/* Mon event.target.value est reçu sous forme de string, je le transforme en number grace à parseInt */}
                {/* Ici, on a un exemple d'input incontrollé */}
                <input type='number' onChange={event => setAmount(parseInt(event.target.value))} defaultValue={defaultAmount} />
                {/* Ici, on a un exemple d'input controllé */}
                {/* <input type='number' onChange={event => setAmount(parseInt(event.target.value))} value={amount ? amount : 0} /> */}
                euro
            </p>
        </header>
    );
};

Header.propTypes = {
    // amount: PropTypes.number.isRequired,
    defaultAmount: PropTypes.number.isRequired,
    setAmount: PropTypes.func.isRequired
}

export default Header;