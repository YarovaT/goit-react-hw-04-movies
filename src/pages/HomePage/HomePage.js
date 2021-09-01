import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import * as MoviesAPI from '../../services/moviesAPI';
import style from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();

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
              <NavLink
                to={{
                  pathname: `${url}movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
                className={style.link}
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
