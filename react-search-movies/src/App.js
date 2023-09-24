import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjliYzM1OTE5M2EzM2VhNmFiZTdlNTg0NTE5Njk3NSIsInN1YiI6IjY1MTA5YjdiZTFmYWVkMDBhZTMwNTFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z6JMTBzW0QPdEaVD3rn196Txl0WaT0LeY2gbxct7ffc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => setMovies(data.results)) // call the response data and setMovies to data and reults is the name of arr in json response
    .catch(err => console.error(err));

  return (
    <div className="App">
      <h1>hello world</h1>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
