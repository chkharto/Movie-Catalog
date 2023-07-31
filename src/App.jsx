import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './api';
import MovieCard from './components/movieCard/MovieCard';

function App() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchData = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();
    setMovies(result.Search);
    console.log(result.Search)
  };

  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <div className="App">
      <h1 className='title'>Movie Catalog</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <i className='fas fa-search' onClick={() => fetchData(searchMovie)}></i>
      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                data={movie}
              />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
