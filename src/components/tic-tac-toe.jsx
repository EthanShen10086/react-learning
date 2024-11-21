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
	// const [isOSign, setOSign] = useState(false);
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
	const [currentStep, setCurrentStep] = useState(0);
	const currentSquares = history[currentStep];
	const isOSign = currentStep % 2 !== 0;

	const stepList = history.map((squareList, step) => {
		let description;
		step > 0
			? (description = 'Go to move #' + step)
			: (description = 'Start Game');
		return (
			<li key={step}>
				<button
					onClick={() => {
						jumpHistory(step);
					}}
				>
					{description}
				</button>
			</li>
		);
	});
	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentStep + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentStep(nextHistory.length - 1);
		// setOSign(!isOSign);
	}
	function jumpHistory(nextStep) {
		setCurrentStep(nextStep);
		// 如果为2其实是第三步
		// setOSign(nextStep % 2 !== 0);
	}

	return (
		<>
			<GameContent
				isOSign={isOSign}
				square={currentSquares}
				onPlay={handlePlay}
			/>
			<GameHistory>{stepList}</GameHistory>
		</>
	);
}
