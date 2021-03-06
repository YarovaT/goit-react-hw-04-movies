import { React, useState } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchForm({ onSubmit }) {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const seachMovies = movie => {
    setQuery(movie.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Search movies"
        inputProps={{ 'aria-label': 'search' }}
        autoComplete="off"
        autoFocus
        value={query}
        onChange={seachMovies}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}
