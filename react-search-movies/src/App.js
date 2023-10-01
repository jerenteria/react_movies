import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjliYzM1OTE5M2EzM2VhNmFiZTdlNTg0NTE5Njk3NSIsInN1YiI6IjY1MTA5YjdiZTFmYWVkMDBhZTMwNTFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z6JMTBzW0QPdEaVD3rn196Txl0WaT0LeY2gbxct7ffc'
    }
  };

  fetch('https://api.themoviedb.org/3/discover/movie?api_key=3b9bc359193a33ea6abe7e5845196975', options)
    .then(response => response.json())
    .then(data => setMovies(data.results)) // call the response data and setMovies to data and reults is the name of arr in json response
    .catch(err => console.error(err));

  // if we havent searched for anything yet show all the movies
  const filterMovies = query.length === 0 ? movies :
    // if not filter the results by the input(get event.target.value in line 31 during onChange!)
    movies.filter(movies => movies.original_title.toLowerCase().includes(query.toLowerCase()));


  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text">Check Out These Trending Movies!</h1>
        <input className="search"
          type="search"
          placeholder="Search... ex. Spy Kids"
          onChange={e => {
            setQuery(e.target.value)
          }} />
      </div>
      <MovieList movies={filterMovies} />
    </div>
  );
}

export default App;
