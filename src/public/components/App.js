import React from 'react';
// import {connect} from 'react-redux';
// import {test} from '../../actions/actions';

// const mapDispatchToProps = dispatch => ({
//   test: a => dispatch(test(a)),
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    const newColor = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({
      color: newColor,
    })
  }
  render() {
     return (
      <div>
        <div style={{color: this.state.color}}>todo</div>
        <button onClick={this.handleClick}>press</button>
      </div>
    )
  }
}

// App = connect(null, mapDispatchToProps)(App);
export default App;
