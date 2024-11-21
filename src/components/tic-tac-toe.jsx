import './tic-tac-toe/tic-tac-toe.css';
import './tic-tac-toe/reset.css';
import GameHistory from './tic-tac-toe/history';
import GameContent from './tic-tac-toe/game-content';

import { useState } from 'react';

export function TicTacToe() {
	// const baseNumberArr = [1, 2, 3];
	// const firstRow = baseNumberArr.map((item, index) => {
	// 	return <Square key={index} value={item}></Square>;
	// });
	// const secondRow = baseNumberArr.map((item, index) => {
	// 	return <Square key={index} value={item + 3}></Square>;
	// });
	// const thirdRow = baseNumberArr.map((item, index) => {
	// 	return <Square key={index} value={item + 6}></Square>;
	// });
	// const componentList = [firstRow, secondRow, thirdRow];
	// const ticTacToeContent = Array.from(
	// 	{ length: 3 },
	// 	(_, rowIndex) => componentList[rowIndex]
	// );
	const [isOSign, setOSign] = useState(false);
	// 一个二维数组
	// [
	// 	// Before first move
	// 	[null, null, null, null, null, null, null, null, null],
	// 	// After first move
	// 	[null, null, null, null, 'X', null, null, null, null],
	// 	// After second move
	// 	[null, null, null, null, 'X', null, null, null, 'O'],
	// 	// ...
	//   ]
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const currentSquares = history[history.length - 1];
	console.log(history, '== history', currentSquares, '== currentSquares');

	function handlePlay(nextSquares) {
		setHistory([...history, nextSquares]);
		setOSign(!isOSign);
	}
	return (
		<>
			<GameContent
				isOSign={isOSign}
				square={currentSquares}
				onPlay={handlePlay}
			/>
			<GameHistory />
		</>
	);
}
