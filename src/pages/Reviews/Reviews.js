import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Container from '../../components/Container';
import Typography from '@material-ui/core/Typography';
import * as MoviesAPI from '../../services/moviesAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.fetchMovieReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  return (
    <Container>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Typography variant="subtitle1" display="block">
                Author: {author}
              </Typography>

              <Typography variant="subtitle1">{content}</Typography>
            </li>
          ))
        ) : (
          <Typography variant="subtitle1">
            Not reviews for this film!
          </Typography>
        )}
      </ul>
    </Container>
  );
}
