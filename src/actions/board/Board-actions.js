// Will contain all the actions here and will be imported into each of the action creators to be used.

export const changeTile = (payload) => {
  return {
    type: 'CHANGE_TILE',
    payload
  };
};

export const changeGame = (payload) => {
  return {
    type: 'CHANGE_CURRENT_TILE',
    payload
  };
};

export const changePlayer = (payload) => {
  return {
    type: 'TOGGLE_PLAYER',
    payload
  }
}
