import React from 'react';

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

export default App;
