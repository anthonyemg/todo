import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {};
const defaultProps = {};

class InputBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>search bar</div>;
  }
}

InputBar.propTypes = propTypes;
InputBar.defaultProps = defaultProps;

const mapStateToProps = state => ({});
const mapDispachToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispachToProps)(InputBar);
