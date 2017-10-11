import React from 'react';

// import { Provider } from 'react-redux';
// import store from './store';

import { connect } from 'react-redux';

const App = (props:{color: string}) => (
        // <Provider store={store}>
          <div>
            <div style={{color: props.color}}>todo</div>
          </div>
        // </Provider>
)

const mapStateToProps = state => ({ color: state.color });

export default connect(mapStateToProps)(App);
