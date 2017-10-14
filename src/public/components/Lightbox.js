import React from 'react';
import ReactDOM from 'react-dom';

class Lightbox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const lightbox = document.createElement('div');
    lightbox.setAttribute('id', 'lightbox');
    document.body.appendChild(lightbox);
    ReactDOM.render(
      <div className="lightbox-container">{this.props.children}</div>,
      document.getElementById('lightbox')
    );
  }
  componentWillUnmount() {
    document.body.removeChild(document.getElementById('lightbox'));
  }
  render() {
    return null;
  }
}

export default Lightbox;
