import { React, useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useRouteMatch } from 'react-router';

import * as MoviesAPI from '../../services/moviesAPI';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { query } = queryString.parse(search);

  const { url } = useRouteMatch();
  const [moviesList, setMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');

  useEffect(() => {
    if (searchQuery !== '') {
      MoviesAPI.fetchSearchMovies(searchQuery).then(({ results }) => {
        setMoviesList(results);
      });
    }
  }, [query, searchQuery]);

  const onFormSubmit = movie => {
    // setMoviesList();

    setSearchQuery(movie);

    history.push({
      ...location,
      search: `query=${movie}`,
    });
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {moviesList && (
        <ul className={style.list}>
          {moviesList.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: { from: location },
                }}
                className={style.link}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <hr />
    </>
  );
}
