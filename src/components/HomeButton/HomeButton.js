import { useHistory } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';

export default function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Button
      variant={'contained'}
      color={'primary'}
      type="button"
      onClick={handleClick}
    >
      GO HOMEPAGE
    </Button>
  );
}
