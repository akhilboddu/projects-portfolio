import PropTypes from 'prop-types';
import Typist from 'react-typist';

import React, { Component } from 'react';

class Jumbotron extends Component {
  state = {
    display: '',
    renderMsg: false,
  }

  componentWillMount() {
    this.setState({ display: this.props.subtitle });
  }

  onHeaderTyped = () => {
    console.log('test');
    this.setState({ display: '' });
  }

  render() {
    const { phrase, subtitle } = this.props;
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4 jumbotronMain"><b>{phrase}</b></h1>
        <Typist
          className="lead"
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          {this.state.display}
        </Typist>
        {/* <p className="lead"></p> */}
      </div>
    );
  }
}

Jumbotron.propTypes = {
  phrase: PropTypes.string,
  subtitle: PropTypes.string,
};

Jumbotron.defaultProps = {
  phrase: '',
  subtitle: '',
};

export default Jumbotron;
