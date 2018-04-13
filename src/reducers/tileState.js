import { TL } from '../symbols/symbols';
import { totalBoard } from '../initialStates';

export default function tileState (state = totalBoard ,action) {
  switch(action.type) {
    case 'CHANGE_TILE':
      return [...action.payload]
    default:
      return state;
  }
};
