import { useParams } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../../services/moviesAPI';
import style from './MovieDetailsPage.module.css';
// import Cast from '../../components/Cast';
// import Reviews from '../Reviews';
import HomeButton from '../../components/HomeButton/HomeButton';

const Cast = lazy(() =>
  import('../../components/Cast' /*webpackChunkName:"cast"*/),
);
const Reviews = lazy(() => import('../Reviews' /*webpackChunkName:"reviews"*/));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const defaultImg =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

  useEffect(() => {
    MoviesAPI.fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(error => error);
  }, [movieId]);
  return (
    <>
      <HomeButton />

      {movie && (
        <div className={style.movieContainer}>
          <img
            className={style.cardImg}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : { defaultImg }
            }
            alt={movie.title}
          />

          <div className={style.movieInfo}>
            <Typography variant="h4">
              {movie.original_title}
              <span>({movie.release_date.substr(0, 4)})</span>
            </Typography>

            <p className={style.movieText}>User Score: {movie.vote_count}%</p>
            <Typography variant="h5">Overview</Typography>

            <p className={style.movieText}>{movie.overview}</p>

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

      {movie && (
        <ul>
          <li className={style.movieLink}>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`} className={style.movieLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Loading page...</h1>}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
