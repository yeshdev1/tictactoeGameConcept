// action expects to return a plain javascript object
// thunk on the other hand
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore( reducers, composeWithDevTools(
  applyMiddleware(thunk)
));
