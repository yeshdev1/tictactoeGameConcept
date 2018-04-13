import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Box.css";
import { X, O } from '../symbols/symbols';

const Box = ({
  onClick,
  index,
  state,
  tile
}) => (
  <div className="box" onClick={() => onClick(index,tile)}>
    {state}
  </div>
);

Box.defaultProps = {
  state: ''
};

Box.PropTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string,
  index: PropTypes.number,
  tile: PropTypes.object
};

export default Box;
