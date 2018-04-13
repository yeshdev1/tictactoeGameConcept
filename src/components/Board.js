import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Board.css";
import BoardTile from './BoardTile';
import Box from './Box';
import { board } from '../initialStates';

export default class Board extends React.Component {
  constructor(props){
    super(props);

    this.boxChange = this.boxChange.bind(this);
  }

  boxChange(index, tileNumber) {
    if(this.props.tileState[tileNumber][Math.trunc(index/this.props.size)][index%this.props.size] === '') {
      this.props.tileStateChange(index, tileNumber);
    }
  }

  render() {
    const {
      index,
      board,
      boardType,
      size,
      tileState,
      gameState,
      children
    } = this.props;

    const {
      0: parentFirstRow,
      1: parentSecondRow,
      2: parentThirdRow
    } = gameState;

    const {
      0: childFirstRow,
      1: childSecondRow,
      2: childThirdRow
    } = index !== -1 ? tileState[index] : board;

    return (
      <div className={boardType === "Parent" ? "Parent-board" : "Child-board"}>
        <div className="Col">
          <div className="Row">
            {boardType === "Parent" ?
              <BoardTile tile={children[0]} state={parentFirstRow[0]} />
              : <Box
                  onClick={this.boxChange}
                  key={0}
                  index={0}
                  state={childFirstRow[0]}
                  tile={index}
                />
             }
            {boardType === "Parent" ?
              <BoardTile tile={children[1]} state={parentFirstRow[1]} />
              : <Box
                  onClick={this.boxChange}
                  key={1}
                  index={1}
                  state={childFirstRow[1]}
                  tile={index}
                />
            }
            {boardType === "Parent" ?
              <BoardTile tile={children[2]} state={parentFirstRow[2]} />
             : <Box
                  onClick={this.boxChange}
                  key={2}
                  index={2}
                  state={childFirstRow[2]}
                  tile={index}
                />
            }
          </div>
          <div className="Row">
            {boardType === "Parent" ?
              <BoardTile tile={children[3]} state={parentSecondRow[0]} />
             : <Box
                  onClick={this.boxChange}
                  key={3}
                  index={3}
                  state={childSecondRow[0]}
                  tile={index}
                />
            }
            {boardType === "Parent" ?
              <BoardTile tile={children[4]} state={parentSecondRow[1]} />
             : <Box
                  onClick={this.boxChange}
                  key={4}
                  index={4}
                  state={childSecondRow[1]}
                  tile={index}
                />
            }
            {boardType === "Parent" ?
              <BoardTile tile={children[5]} state={parentSecondRow[2]} />
             : <Box
                  onClick={this.boxChange}
                  key={5}
                  index={5}
                  state={childSecondRow[2]}
                  tile={index}
                />
            }
          </div>
          <div className="Row">
            {boardType === "Parent" ?
              <BoardTile tile={children[6]} state={parentThirdRow[0]} />
             : <Box
                  onClick={this.boxChange}
                  key={6}
                  index={6}
                  state={childThirdRow[0]}
                  tile={index}
                />
            }
            {boardType === "Parent" ?
              <BoardTile tile={children[7]} state={parentThirdRow[1]} />
             : <Box
                  onClick={this.boxChange}
                  key={7}
                  index={7}
                  state={childThirdRow[1]}
                  tile={index}
                />
            }
            {boardType === "Parent" ?
              <BoardTile tile={children[8]} state={parentThirdRow[2]} />
             : <Box
                  onClick={this.boxChange}
                  key={8}
                  index={8}
                  state={childThirdRow[2]}
                  tile={index}
                />
            }
          </div>
        </div>
      </div>
    );
  }
}

Board.defaultProps = {
  index: -1,
  board: {},
  boardType: 'Child',
  size: 3,
  children: []
}

Board.propTypes = {
  index: PropTypes.number,
  board: PropTypes.object,
  boardType: PropTypes.oneOf(['Parent','Child']),
  size: PropTypes.number,
  children: PropTypes.array
}
