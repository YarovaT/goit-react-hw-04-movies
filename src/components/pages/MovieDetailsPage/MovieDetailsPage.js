import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../../services/moviesAPI';
import style from './MovieDetailsPage.module.css';
import Cast from '../../Cast';
// import Reviews from '../../Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const defaultImg =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

  useEffect(() => {
    MoviesAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={style.movieContainer}>
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : { defaultImg }
            }
            alt={movie.title}
          />

          <div className={style.movieInfo}>
            <Typography variant="h3">
              {movie.original_title}
              <span>({movie.release_date.substr(0, 4)})</span>
            </Typography>

            <p>User Score: {movie.vote_count}%</p>
            <Typography variant="h4">Overview</Typography>

            <p>{movie.overview}</p>

            <Typography variant="h5">
              Genres:
              <br />
              <span className={style.textInfo}>
                {movie.genres.map(({ id, name }) => (
                  <span key={id}>{`${name} `}</span>
                ))}
              </span>
            </Typography>
          </div>
        </div>
      )}
      <hr align="center" width="100%" size="3" color="#0000dd" />

      <Typography variant="h5">Additional information</Typography>

      <Route path="/movies/:movieId">
        <Cast />
      </Route>

      {/* <Route path="/movies/:movieId">
          <Reviews />
        </Route> */}
    </>
  );
}
