import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <Movie 
                    image={movie.poster_path}
                    name={movie.original_title}
                />
            ))}
        </ul>
    )
};


export default MovieList;