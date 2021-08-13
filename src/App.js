import './App.css';
import { Container } from '@material-ui/core';
import AppBar from './components/AppBar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
