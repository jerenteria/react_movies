import React from 'react';
import './Movie.css';

const Movie = (props) => {
    return (
        <section className="MovieList">
                <h2>{props.name}</h2>
                <h2 className="image"><img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="movie"/></h2>
        </section>
    );
};

export default Movie;