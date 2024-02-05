// On import l'objet PropTypes depuis un librairie qui est déjà installé nativement lorsque j'utilise React. Cette librairie permet de vérifier la nature des props que vont recevoir nos composants.
import PropTypes from 'prop-types';

// Un composant reçoit tous ses paramètres dans un seul objet. Chaque pamamètre sera une propriété de cette objet.
const Counter = ({ nbOfTrainers }) => {
    return (
        <p className='counter'>{`${nbOfTrainers} formateurs trouvés`}</p>
    )
}

// Pour définir les ProTypes d'un composant, je dois utiliser la syntaxe suivante:
// Le nom de mon composant + la méthode propTypes (attention, le "p" est minuscule). On en déduit que lorsque l'on crée un composant, React nous rajoute automatiquement des méthodes, d'où la méthode propTypes.
Counter.propTypes = {
    // On va ensuite définir un objet, où chaque propriété sera une les propriétés qu'on a reçu dans props.
    // La valeur de ses propriétés sera le type (array, string, object, function, bool, node, etc...). On doit pour cela utiliser l'objet qu'on a importer, PropTypes (avec le "P" en majuscule). Cette objet nous donnera accès à des méthodes qui nous serviront à spécifier le type de ma propriété.
    nbOfTrainers: PropTypes.number
};

export default Counter;