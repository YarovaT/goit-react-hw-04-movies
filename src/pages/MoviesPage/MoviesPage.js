import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as MoviesAPI from '../../services/moviesAPI';
import SearchForm from '../../components/SearchForm/SearchForm';
import style from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    if (searchQuery !== '') {
      MoviesAPI.fetchSearchMovies(searchQuery).then(({ results }) => {
        setMoviesList(results);
      });
    }
  }, [searchQuery]);

  const onFormSubmit = movie => {
    setSearchQuery(movie);
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {moviesList && (
        <ul className={style.list}>
          {moviesList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${url}/${id}`} className={style.link}>
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
