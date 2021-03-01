import React from 'react';
import Film from "./Film";


const FilmList = ({films}) => {
    
    const filmNodes = films.map(({id, name, url}) => {
        return (
            <Film key={id} url={url}>{name}</Film>
        );
    }); 
    
    
    return (
        <>
        {filmNodes}
        </>
    )
}

export default FilmList;