import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => <div>{stage.map((row) => row.map((cell, x) => <Cell key={x} type={Cell[0]} />))}</div>;

export default Stage;
