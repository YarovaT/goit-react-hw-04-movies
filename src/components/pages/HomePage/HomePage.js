import { useState, useEffect } from 'react';
import * as MoviesAPI from '../../services/moviesAPI';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    MoviesAPI.fetchHomePage()
      .then(({ results }) => {
        return results;
      })
      .then(setMovies);
  }, []);

  return (
    <>
      <Typography variant="h2">Trending today</Typography>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
