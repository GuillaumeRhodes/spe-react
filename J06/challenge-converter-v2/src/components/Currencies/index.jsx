import PropTypes from 'prop-types';
import './styles.scss';

const Currencies = ({ currencies, setCurrency }) => {

    return (
        <div className='currencies'>
            <h2 className='currencies-title'>Currencies</h2>
            <ul className='currencies-list'>
                {currencies.map(currency => {
                    const { code, description } = currency;

                    return <li key={code} className='currency' onClick={() => setCurrency(currency)}>{description}</li>
                })}
            </ul>
        </div>
    )
}

Currencies.propTypes = {
    currencies: PropTypes.array,
    setCurrency: PropTypes.func
}

export default Currencies;