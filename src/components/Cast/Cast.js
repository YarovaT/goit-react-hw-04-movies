import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Container from '../../components/Container';
import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../../services/moviesAPI';
import style from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  const defaultImg =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

  useEffect(() => {
    MoviesAPI.fetchMovieCredits(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <Container>
      {cast && (
        <ul className={style.cardList}>
          {' '}
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={style.cardItem}>
              <div className={style.imgBox}>
                {' '}
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : { defaultImg }
                  }
                  alt={name}
                />
              </div>

              <div className={style.cardInfo}>
                <Typography variant="subtitle1" display="block">
                  {name}
                </Typography>

                <Typography variant="subtitle1">
                  Character: {character}
                </Typography>
              </div>
            </li>
          ))}
          ;
        </ul>
      )}
    </Container>
  );
}
