//Use react router here
import React from 'react';
import Board from '../containers/Board-container';
import { boardSize } from '../initialStates';
import '../styles/App.css';
import {C} from '../symbols/symbols';

const App = () => (
  <div className="App">
    <Board boardType="Parent">
      {[...Array(boardSize*boardSize)].map((val,index) =>
        <Board
          key={index}
          index={index}
        />
      )}
    </Board>
  </div>
);

export default App;
