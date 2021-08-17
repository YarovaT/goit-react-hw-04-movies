import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import * as MoviesAPI from '../../services/moviesAPI';
import style from './HomePage.module.css';

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

      <ul className={style.list}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link className={style.link} to={`${url}movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
