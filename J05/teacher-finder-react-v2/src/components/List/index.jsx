import PropTypes from 'prop-types';

const List = ({ trainers }) => {

    return (
        <ul className='list'>
            {trainers.map(trainer => {
                return (
                    // Si je renvois un tableau d'éléments JSX (ici via notre map), chaque élément (parent) du tableau doit avoir une propriété key avec une valeur unique.
                    <li key={trainer.name} className='list-item'>
                        {trainer.name}
                        <span className='list-tag list-tag--language'>{trainer.language}</span>
                        <span className='list-tag list-tag--specialty'>{trainer.specialty}</span>
                    </li>
                )
            })}
        </ul>
    )
}

List.propTypes = {
    trainers: PropTypes.array
};

export default List;