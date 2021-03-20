/* eslint no-debugger: 0 */

import React from 'react';

const Square = (props) => {

  return <button onClick={props.onClick}> {props.value} </button>;
};

const Board = () => {

  return <Square value="1" onClick={() => onClick("dummy value")} />
};

export default Board;
