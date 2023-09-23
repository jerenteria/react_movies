import './App.css';

function App() {
  async function fetchMovies() {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '61cd266afdmsh2edc6cf5b3e7007p145928jsn4b9fc72e0837',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
