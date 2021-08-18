import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as MoviesAPI from '../../services/moviesAPI';
import SearchForm from '../../components/SearchForm/SearchForm';

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
        <ul>
          {moviesList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}
