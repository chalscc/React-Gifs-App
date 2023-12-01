import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const addCategory = () => {
        setCategories( ['HunterXHunter', ...categories] )
    }

    console.log(categories)

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory setCategories={ setCategories }/>

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
