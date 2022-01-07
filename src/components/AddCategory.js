import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handlerSubmit =(e) => {
        // Evita que se recargue la pagina al presionar Enter
        e.preventDefault();

        if(inputValue.trim().length > 1){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
            type='text'
            value={ inputValue }
            onChange={ handleInputChange }
            ></input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}