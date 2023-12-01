import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()        
        
        if(inputValue.trim().length <= 1) return // control errores

        onNewCategory( inputValue.trim() )
        setInputValue(''); // limpiar el input
    }
  
    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Buscar..."
                defaultValue={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
