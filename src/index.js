import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
