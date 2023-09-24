import React from 'react';

const Movie = (props) => {
    return (
        <section className="MovieList">
            <li>
                <h2>{props.image}</h2>
                <h2>{props.name}</h2>
            </li>
        </section>
    );
};

export default Movie;