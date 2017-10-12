import React from 'react';
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

const mapStateToProps = state => ({
  color: state.color,
});

const mapDispachToProps = dispatch => ({
  handleColorChange: color => dispatch(setColor(color)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
