import './tic-tac-toe/tic-tac-toe.css';
import './tic-tac-toe/reset.css';
import Square from './tic-tac-toe/square';
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

	// 将状态放在父组件进行控制
	const [square, setSquare] = useState(Array(9).fill(null));
	const square2DComponentList = square.map((item, index) => {
		return (
			<Square
				squareValue={item}
				setSquareClick={setSquare}
				key={index}
				squareKey={index}
			></Square>
		);
	});
	const square2DArray = Array.from({ length: 3 }, (_, rowIndex) =>
		square2DComponentList.slice(rowIndex * 3, rowIndex * 3 + 3)
	);

	const ticTacToeContent = Array.from({ length: 3 }, (item, rowIndex) => {
		console.log(item, '== ticTacToeContent item');
		return (
			// 这里如果key用item 你的item都是null啊会报prop错误
			<section className="board-row" key={rowIndex}>
				{square2DArray[rowIndex]}
			</section>
		);
	});

	return <>{ticTacToeContent}</>;
}
