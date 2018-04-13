import React from 'react';
import PropTypes from 'prop-types';
import "../styles/BoardTile.css";

const BoardTile = ({
  tile,
  state
}) => (
  <div className="Parent-box">
    {tile}
  </div>
);

BoardTile.PropTypes = {
  tile: PropTypes.object.required
};

export default BoardTile;
