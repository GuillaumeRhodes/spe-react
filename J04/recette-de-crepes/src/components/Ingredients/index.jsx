import PropTypes from 'prop-types';
import './styles.scss';

const Ingredient = ({ name, quantity, unit }) => {
    return (
        <li className='ingredient'>
            <span className='ingredient-quantity'>{quantity} {unit}</span>
            {name}
        </li>
    )
}

Ingredient.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string
}

// Attention ! On utilise les termes Ingredients, Ingredient, ingredients, ingredient. Ils ne font pas référence aux mêmes choses, c'est PRIMORDIAL de réussir à faire la différence entre chaque.
const Ingredients = ({ ingredients }) => {
    return (
        <div className="ingredients">
            <ul>
                {ingredients.map(({ id, name, quantity, unit }) => <Ingredient key={id} name={name} quantity={quantity} unit={unit} />)}
            </ul>
        </div>
    )
}

Ingredients.propTypes = {
    ingredients: PropTypes.array
}

export default Ingredients;