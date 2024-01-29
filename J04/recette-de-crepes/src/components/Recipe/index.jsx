import Header from '../Header';
import Ingredients from '../Ingredients';
import Steps from '../Steps';
import datas from '../../datas/recipes';
import './styles.scss'

const Recipe = () => {
    // On destructure tout pour deux raisons, la première c'est que ça nous permet de pratiquer un peu la destructuration, la deuxième c'est que ça nous permet de voir d'une simple coup d'oeil ce qu'il y a dans l'objet datas.
    const { author, difficulty, ingredients, instructions, thumbnail, title } = datas;

    return (
        <div className="recipe">
            <Header author={author} difficulty={difficulty} thumbnail={thumbnail} title={title} />
            <Ingredients ingredients={ingredients} />
            <Steps instructions={instructions} />
        </div>
    )
}

export default Recipe;