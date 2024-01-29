import { useState } from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ count, setCount }) => {
    return (
        // Je donne en argument à setCount la nouvelle valeur de count
        <button onClick = {() => setCount(count + 1)}>+1</button>
    )
};

MyButton.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func
}

const Counter = () => {
    // Pour pouvoir modifier le count et que l'application se mette à jour, je vais créer un state.
    // Pour cela, je vais avoir besoin de la fonction useState (que j'ai importé plus haut).
    // useState est une fonction qui va me renvoyer un tableau contenant, une propriété avec la valeur, et une propriété avec une fonction qui permet de modifier cette valeur.
    // On peut définir une valeur par défaut en la renseignant dans les paranthèses de la fonction useState.
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <MyButton count={count} setCount={setCount} />
        </div>
    )
}

export default Counter;