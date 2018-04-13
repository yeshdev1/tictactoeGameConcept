import { changeGame } from '../Board-actions';
import { P1,P2,C } from '../../../symbols/symbols';
import { boardSize } from '../../../initialStates';
import { rowFind, columnFind, diagonalFind } from '../../../utils/utils';

const allTilesSelected = (gameState) => {
  for( var r in gameState ) {
    gameState[r] = gameState[r].map(cell => {
       return cell || C;
    });
  }

  return gameState;
}

// As described, this is to detect the winner of the tile itself
const detectWinnerOfTile = (tileNumber, tileState) => {
  const {
    0: first,
    1: second,
    2: third
  } = tileState[tileNumber];

  console.log(rowFind([first,second,third]));
  console.log(columnFind([first,second,third]));
  console.log(diagonalFind([first,second,third]));

  return rowFind([first,second,third]) || columnFind([first,second,third]) || diagonalFind([first,second,third]);
}

// Creating the current state of the game after each move:
// 1.
const createCurrentGameState = (index, tileNumber, curState) => {
  const {
    tileState,
    gameState,
    winner
  } = curState;

  const row = Math.trunc(index/boardSize);
  const column = Math.trunc(index%boardSize);

  if(detectWinnerOfTile(tileNumber, tileState)) {
    gameState[row][column] = winner.curPlayer;
  }

  // If the player has already won that tile in the game
  // All tiles except for the ones that have already been won will
  // be set to Current tile since the user can select any of the cells in any of the tiles
  // that are available
  if((gameState[row][column] !== '' && gameState[row][column] !== C)) {
    return allTilesSelected(gameState);
  }

  // Setting the current tile to C, basic operation
  for( var r in gameState ) {
    gameState[r] = gameState[r].map(cell => {
       return cell === C ? '' : cell;
    });
  }
  gameState[row][column] = C;
  return gameState;
}

export const setCurrentTile = (index, tileNumber) => {
  return (dispatch, getState) => {
    dispatch(changeGame(createCurrentGameState(index, tileNumber, getState())));
  }
}
