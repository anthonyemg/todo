import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {};
const defaultProps = {};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>todo list</div>;
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = state => ({});
const mapDispachToProps = state => ({});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
