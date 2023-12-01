import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory)) return;
        

        setCategories( [newCategory, ...categories] )
    }

    console.log(categories)

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory         
        // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
        />

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
