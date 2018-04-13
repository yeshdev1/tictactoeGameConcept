import { changePlayer } from '../Board-actions';
import { P1, P2 } from '../../../symbols/symbols';

export const setPlayer = (winner) => {
  return (dispatch) => {
    const curPlayer = winner.curPlayer === P1 ? P2 : P1;
    dispatch(changePlayer(curPlayer));
  }
}
