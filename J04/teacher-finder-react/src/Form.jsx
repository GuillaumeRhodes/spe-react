const Form = () => {
    return (
        // Personnellement, je vous conseillerais toujours si vous avez plusieurs éléments à renvoyer de les encapsuler dans une div (ou autre si plus adapté).
        // Dans le cas où vous voulez return sans container parent, on pourra utiliser un outil fourni par React, qui s'appelle un Fragment. Il va nous permettre d'encapsuler nos éléments pour les return, mais il ne sera pas pris en compte par la suite (il disparait).
        <>
            <select className='search-languages'>
                <option className='search-option' value='javascript'>JavaScript</option>
                <option className='search-option' value='php'>PHP</option>
            </select>
            <select className='search-languages'>
                <option className='search-option' value='react'>React</option>
                <option className='search-option' value='symfony'>Sympfony</option>
                <option className='search-option' value='data'>Data</option>
            </select>
        </>
    )
}

export default Form;