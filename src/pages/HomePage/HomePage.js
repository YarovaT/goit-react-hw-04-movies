import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../../services/moviesAPI';
import style from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    MoviesAPI.fetchHomePage().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <Typography variant="h2">Trending today</Typography>

      <ul className={style.list}>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`${url}movies/${id}`} className={style.link}>
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
