import { combineReducers } from 'redux'
import tileState from './tileState';
import gameState from './gameState';
import winner from './winner';

export default combineReducers({
  tileState,
  gameState,
  winner
});
