import { useParams } from 'react-router';
// import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import * as MoviesAPI from '../services/moviesAPI';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const genresName = movie.genres.map(function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  });

  useEffect(() => {
    MoviesAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>
            {movie.original_title}({movie.vote_count})
          </h2>
          <p>User Score:{movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genresName}</p>
        </>
      )}
    </>
  );
}
