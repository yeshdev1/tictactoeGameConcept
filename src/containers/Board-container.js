import React from 'react';
import { connect } from 'react-redux';
import Board from "../components/Board";
import { tileStateChange } from '../actions/board/actionCreators/tile-action-creators';

const mapStateToProps = (state) => {
  return {
    tileState: state.tileState,
    gameState: state.gameState,
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
