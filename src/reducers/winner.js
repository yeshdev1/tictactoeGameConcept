import { X, O, P1, P2 } from '../symbols/symbols';
import { playerState } from '../initialStates';

export default function winner (state =  playerState, action) {
  switch(action.type) {
    case 'TOGGLE_PLAYER':
      return { ...state, curPlayer: action.payload }
    case 'SET_WINNER':
      return { ...state, result: true }
    default:
      return state;
  }
};
