import { P1,P2,C } from '../symbols/symbols';
import { board } from '../initialStates';

export default function gameState (state = board, action) {
  switch(action.type) {
    case 'CHANGE_CURRENT_TILE':
      return {
        ...action.payload
      }
    case 'SET_OCCUPIED':
      return {
        ...state,
        [action.row] : [
          ...state[action.row],
          state[action.row][action.column]: action.player
        ]
      }
    default:
      return state;
  }
};
