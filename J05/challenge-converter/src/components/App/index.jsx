import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';
import './styles.scss';

const App = () => {
    const baseAmount = 1;

    return (
        <div className='converter'>
            <Header amount={baseAmount} />
            <Currencies />
            <Result currency='United States Dollar' value={1.09} />
        </div>
    );
};

export default App;