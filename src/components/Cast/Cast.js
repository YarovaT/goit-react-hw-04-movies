import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router';
import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../services/moviesAPI';
import style from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  console.log(cast);

  const { movieId } = useParams();

  const defaultImg =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

  useEffect(() => {
    MoviesAPI.fetchMovieCredits(movieId)
      .then(({ cast }) => {
        return cast;
      })
      .then(setCast);
  }, [movieId]);

  return (
    <Container style={{ padding: '0' }}>
      <ul className={style.cardList}>
        {cast &&
          cast.map(credit => (
            <li key={credit.id} className={style.cardItem}>
              <div className={style.imgBox}>
                {' '}
                <img
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                      : { defaultImg }
                  }
                  alt={credit.name}
                />
              </div>

              <div className={style.cardInfo}>
                <Typography variant="subtitle1" display="block">
                  {credit.name}
                </Typography>

                <Typography variant="subtitle1">
                  Character: {credit.character}
                </Typography>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
}
