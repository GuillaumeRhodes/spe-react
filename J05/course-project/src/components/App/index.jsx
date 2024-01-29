import Counter from '../Counter';
import Container from '../Container';
import styles from './styles.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            App
            <Container />
            <Counter />
        </div>
    );
};

export default App;