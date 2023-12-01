import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category}) => {    

    const [images, setImages] = useState([]);

    const setGifs = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
    }

    useEffect( () => {
        setGifs();
    }, [])

    
    return (
        <>
        
            <h3> { category } </h3>

            <ol>
                {
                    images.map( ({id, title}) => (
                        <>                            
                            <li key={id}>{title}</li>
                        </>
                    ))
                }
            </ol>
        
        </>
    )
}
