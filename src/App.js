import './App.css';
import { Container } from '@material-ui/core';
import AppBar from './components/AppBar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './components/MoviesDetails';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
