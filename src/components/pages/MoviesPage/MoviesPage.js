import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as MoviesAPI from '../../services/moviesAPI';
import SearchForm from '../../SearchForm/SearchForm';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const { url } = useRouteMatch();
  console.log(url);

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
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}
