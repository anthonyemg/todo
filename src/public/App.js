import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColor } from './actions';

const App = (props) => (
  <div>
    <div
      style={{color: props.color}}
      onClick={() => props.handleColorChange(props.color === 'red' ? 'blue' : 'red')}
      >
      todo
    </div>
  </div>
)

App.propTypes = {
  color: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  color: state.color,
});

const mapDispachToProps = dispatch => ({
  handleColorChange: color => dispatch(setColor(color)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
