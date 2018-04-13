import { changeTile } from '../Board-actions';
import { X, O, P1, P2 } from '../../../symbols/symbols';
import { boardSize } from '../../../initialStates';
import { setPlayer } from './winner-action-creators';
import { setCurrentTile } from './game-action-creators';
import { detectWinnerOfTile } from './game-action-creators';

const setBox = (curState, index, tileNumber) => {
  const {
    winner,
    tileState
  } = curState;

  tileState[tileNumber][Math.trunc(index/boardSize)][index%boardSize] = winner.curPlayer === P1 ? X : O;
  return changeTile(tileState);
}

export const tileStateChange = (index, tileNumber) => {
  return (dispatch, getState) => {
    let curState = getState();
    dispatch(setBox(curState, index, tileNumber));
    dispatch(setPlayer(curState.winner));
    dispatch(setCurrentTile(index, tileNumber));
  }
}
