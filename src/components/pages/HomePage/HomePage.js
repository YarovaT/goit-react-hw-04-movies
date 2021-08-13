import { useState, useEffect } from 'react';
import * as MoviesAPI from '../../services/moviesAPI';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    MoviesAPI.fetchHomePage().then(setMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>

      {movies && movies.map(movie => <li key="movie.id">{movie.title}</li>)}
    </>
  );
}
