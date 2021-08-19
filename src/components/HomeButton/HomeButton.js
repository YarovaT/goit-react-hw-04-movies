import { useHistory } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import DirectionsOutlined from '@material-ui/icons/Directions';

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
      <DirectionsOutlined />
      GO BACK
    </Button>
  );
}
