import PropTypes from 'prop-types';

const Form = ({ selectedLanguage, selectedSpecialty, setSelectedLanguage, setSelectedSpecialty }) => {
    return (
        // Personnellement, je vous conseillerais toujours si vous avez plusieurs éléments à renvoyer de les encapsuler dans une div (ou autre si plus adapté).
        // Dans le cas où vous voulez return sans container parent, on pourra utiliser un outil fourni par React, qui s'appelle un Fragment. Il va nous permettre d'encapsuler nos éléments pour les return, mais il ne sera pas pris en compte par la suite (il disparait).
        <>
            {/* En utilisant React, on peut à la fois mettre une valeur par défaut et un eventListener directement dans l'écriture de mon select. Par curiosité, allez revoir comment est-ce que l'on faisait en J01. */}
            <select className='search-languages' defaultValue={selectedLanguage} onChange={event => setSelectedLanguage(event.target.value)}>
                <option className='search-option' value='JavaScript'>JavaScript</option>
                <option className='search-option' value='PHP'>PHP</option>
            </select>
            <select className='search-languages' defaultValue={selectedSpecialty} onChange={event => setSelectedSpecialty(event.target.value)}>
                <option className='search-option' value='React'>React</option>
                <option className='search-option' value='Symfony'>Symfony</option>
                <option className='search-option' value='Data'>Data</option>
            </select>
        </>
    );
};

Form.propTypes = {
    selectedLanguage: PropTypes.string,
    selectedSpecialty: PropTypes.string,
    setSelectedLanguage: PropTypes.func,
    setSelectedSpecialty: PropTypes.func
};

export default Form;