import { Container } from '@material-ui/core';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  return <Container>{movieId}</Container>;
}
