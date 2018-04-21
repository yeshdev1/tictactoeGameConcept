import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Box.css";
import { X, O } from '../symbols/symbols';
import classname from 'classnames';

const Box = ({
  onClick,
  status,
  index,
  state,
  tile
}) => (
  <div
    className={classname({"box": !status} , { "current-box": status})}
    onClick={() => {
      return (typeof onClick === "function") ? onClick(index,tile) : null
    }}
  >
    {state}
  </div>
);

Box.defaultProps = {
  state: '',
  status: false
};

Box.PropTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string,
  index: PropTypes.number,
  tile: PropTypes.object,
  status: PropTypes.bool
};

export default Box;
