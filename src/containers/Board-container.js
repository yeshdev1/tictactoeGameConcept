import React from 'react';
import { connect } from 'react-redux';
import Board from "../components/Board";
import { tileStateChange } from '../actions/board/actionCreators/tile-action-creators';
import { C } from "../symbols/symbols";

const tileStatus = (state) => {
  return ({
    0: top,
    1: middle,
    2: bottom
  } = state) => {
    return (top.join("").length === 0 && middle.join("").length === 0 && bottom.join("").length === 0) ||
           (top.join("").length === 3 && middle.join("").length === 3 && bottom.join("").length === 3);
  }
}

const mapStateToProps = (state) => {
  return {
    tileState: state.tileState,
    gameState: state.gameState,
    tileStatus: tileStatus(state.gameState)(),
    winner: state.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tileStateChange: (index, tileNumber) => {
      dispatch(tileStateChange(index, tileNumber));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
