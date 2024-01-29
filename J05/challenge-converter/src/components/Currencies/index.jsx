// Puisque je me sers de ces datas seulement dans Currencies, je vais les importer ici. Autrement, je l'aurais importé dans App (son composant parent).
import currencies from '../../datas/currencies';
import './styles.scss';

const Currencies = () => {
    return (
        <div className='currencies'>
            <h2 className='currencies-title'>Currencies</h2>
            <ul className='currencies-list'>
                {currencies.map(({ code, description }) => <li key={code}>{description}</li>)}
            </ul>
        </div>
    )
}

export default Currencies;