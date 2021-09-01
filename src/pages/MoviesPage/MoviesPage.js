import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import * as MoviesAPI from '../../services/moviesAPI';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { search } = location;

  useEffect(() => {
    if (searchQuery !== '') {
      MoviesAPI.fetchSearchMovies(searchQuery).then(({ results }) => {
        setMoviesList(results);
      });
    }
  }, [searchQuery]);

  const onFormSubmit = movie => {
    history.push({
      ...location,
      search: `query=${movie}`,
    });

    setSearchQuery(movie);
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
