import PropTypes from 'prop-types';
import './styles.scss';

const Result = ({ currency, value }) => {
    return (
        <div className='result'>
            <span className='result-value'>{value}</span>
            <span className='result-currency'>{currency}</span>
        </div>
    );
};

Result.propTypes = {
    currency: PropTypes.string,
    value: PropTypes.number
};

export default Result;