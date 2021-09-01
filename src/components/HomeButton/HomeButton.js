import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Button = () => {
  const location = useLocation();
  const history = useHistory();
  const goBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <button type="button" onClick={goBackBtn}>
      GO BACK
    </button>
  );
};

export default Button;
