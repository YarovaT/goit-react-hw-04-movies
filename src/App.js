import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AppBar from './components/AppBar';
import './App.css';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "moviesDetails-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notFoundPage-page" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>Loading page...</h1>}>
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
      </Suspense>
    </Container>
  );
}

export default App;
