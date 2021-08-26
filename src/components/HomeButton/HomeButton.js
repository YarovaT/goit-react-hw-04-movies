import React from 'react';
import { withRouter } from 'react-router';

class Button extends React.Component {
  render() {
    return (
      <button type="button" onClick={() => this.props.history.go(-1)}>
        GO BACK
      </button>
    );
  }
}

const HomeButton = withRouter(Button);

export default HomeButton;
