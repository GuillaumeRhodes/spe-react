import { useState } from 'react';
import currencies from '../../datas/currencies';
import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';
import './styles.scss';

const App = () => {
    // const [currency, setCurrency] = useState({ description: 'United States Dollar', code: 'USD', rate: 1.078178 });
    // De manière plus propre, on aurait pu chercher l'objet directement dans nos datas avec find via son code. Comme ça, si le rate change dans les datas, l'application automatiquement mis à jour.
    const [currency, setCurrency] = useState(currencies.find(({ code }) => code === 'USD'));
    const defaultAmount = 1;
    const [amount, setAmount] = useState(defaultAmount);
    const { description, rate } = currency;

    return (
        <div className='converter'>
            {/* Je commente amount, il est utilisé pour la version input controllé. */}
            <Header /*amount={amount} */ setAmount={setAmount} defaultAmount={defaultAmount} />
            <Currencies currencies={currencies} setCurrency={setCurrency} />
            {/* J'ai utilisé un ternaire qui permet de dire: si amount existe, alors j'envois amount * rate, si il n'existe pas, alors j'envoie 0. On peut imaginer cette écriture comme un if(amount) { return amount * rate } else { return 0 } */}
            <Result currency={description} value={amount ? amount * rate : 0} />
        </div>
    );
};

export default App;