import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import style from './HomeButton.module.css';

const Button = () => {
  const location = useLocation();

  const history = useHistory();

  const goToBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <button style={style.button} type="button" onClick={goToBackBtn}>
      GO BACK
    </button>
  );
};

export default Button;
