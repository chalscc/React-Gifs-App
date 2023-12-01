import React, { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const addCategory = () => {
        setCategories( [...categories, 'HunterXHunter'] )
    }

    console.log(categories)

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}

        {/* listado de gif */}
        <button onClick={addCategory}>Agregar</button>
        <ol>
            { 
                categories ? categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }): null
            }
        </ol>

        </>
    )
}
