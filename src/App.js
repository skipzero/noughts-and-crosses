import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Noughts and Crosses</h1>
      </header>
      <Game />
    </div>
  );
}

function genGrid(rows, col, ) {
  return Array(rows).fill(null).map(() => {
    return Array(col).fill(null);
  });
}

const newGameBoard = () => {
  return genGrid(3, 3);
};

function Game() {
  const board = newGameBoard();
  console.log('+++++', board);
  return board;
}

export default App;
