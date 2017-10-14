import React from 'react';
import PropTypes from 'prop-types';
import InputBar from './InputBar';
import TodoList from './TodoList';

const propTypes = {};
const defaultProps = {};

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="landing-container">
        <InputBar stu />
        <TodoList />
      </div>
    );
  }
}

Landing.propTypes = propTypes;
Landing.defaultProps = defaultProps;

export default Landing;
