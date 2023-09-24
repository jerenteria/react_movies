import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <Movie 
                    image={movie.backdrop_path}
                    name={movie.original_title}
                />
            ))}
        </ul>
    )
};


export default MovieList;