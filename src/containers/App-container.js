import React from 'react';
import { connect } from 'react-redux';
import App from "../components/App";

const mapStateToProps = ({ gameState }) => {
  return {
    gameState
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
