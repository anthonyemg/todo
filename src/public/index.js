import React from 'react';
import ReactDom from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './reducers/reducers';
import App from './components/App'

// const store = createStore(reducer);

ReactDom.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('app')
)
