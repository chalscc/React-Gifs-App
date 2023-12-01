import React, { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    console.log(categories)

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}

        {/* listado de gif */}
        <ol>
            { categories ? categories.map( category => {
                return <li key={ category }>{ category }</li>
            }): null}
        </ol>

        </>
    )
}
