import PropTypes from 'prop-types';
import './styles.scss'

const Step = ({ children }) => {
    return (
        <li className='step'>{children}</li>
    )
}

Step.propTypes = {
    children: PropTypes.string
}

const Steps = ({ instructions }) => {
    return (
        <ul className='steps'>
            {/* Attention ! On ne doit jamais se servir de l'index d'un tableau pour renseigner la key. */}
            {instructions.map(instruction => <Step key={instruction}>{instruction}</Step>)}
        </ul>
    )
}

Steps.propTypes = {
    instructions: PropTypes.array
}

export default Steps;