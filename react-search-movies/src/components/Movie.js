import React from 'react';
import MovieList from './MovieList';

const Movie = (props) => {
    return (
        <section className="MovieList">
            <li>
                <h2>{props.name}</h2>
                <h2><img src={`https://image.tmdb.org/t/p/w500/${props.image}`} /></h2>
            </li>
        </section>
    );
};

export default Movie;