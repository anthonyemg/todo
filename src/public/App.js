import React from 'react';
import { connect } from 'react-redux';

const App = (props:{color: string}) => (
  <div>
    <div style={{color: props.color}}>todo</div>
  </div>
)

const mapStateToProps = state => ({ color: state.color });

export default connect(mapStateToProps)(App);
