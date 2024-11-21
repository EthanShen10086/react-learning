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
	const [isOSign, setOSign] = useState(false);
	const winner = getFinalWinner(square);
	let status;
	winner
		? (status = 'Winner: ' + winner)
		: (status = 'Next player: ' + (isOSign ? 'O' : 'X'));

	const square2DComponentList = square.map((item, index) => {
		return (
			<Square
				squareValue={item}
				onSquareClick={handleClickSquare}
				key={index}
				squareKey={index}
			></Square>
		);
	});
	const square2DArray = Array.from({ length: 3 }, (_, rowIndex) =>
		square2DComponentList.slice(rowIndex * 3, rowIndex * 3 + 3)
	);
	const ticTacToeContent = Array.from({ length: 3 }, (_, rowIndex) => {
		// Array.from 的私有属性_是undefined
		return (
			// 这里如果key用item 你的item都是null啊会报prop错误
			<section className="board-row" key={rowIndex}>
				{square2DArray[rowIndex]}
			</section>
		);
	});

	// 单击 Square 时， Square 子组件现在要求 Board 父组件更新棋盘的 state。
	// 当 Board 的 state 改变时，Board 组件和每个子 Square 都会自动重新渲染。
	function handleClickSquare(squareIndex) {
		// 如果已经赋值了 那么就不允许操作
		// 如果已经有人胜利了那么也不需要操作
		// 请注意计算整个数值数组
		if (square[squareIndex] || getFinalWinner(square)) {
			return;
		}
		// 不传递参数就是单纯不切割只纯拷贝
		const nextSquares = square.slice();
		// 这里的square其实不是二维数组而是数据--一维数组
		// 二维数组的是组件是DOM元素
		// nextSquares[0] = 'X';
		isOSign
			? (nextSquares[squareIndex] = 'O')
			: (nextSquares[squareIndex] = 'X');
		setOSign(!isOSign);
		setSquare(nextSquares);
	}

	function getFinalWinner() {
		// 排列组合得到所有的获胜结果
		const winResultList = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		// 便利所有胜利结果得到胜者
		for (let rowIndex = 0; rowIndex < winResultList.length; rowIndex++) {
			// 解构获取胜利二维数组的各个胜利结果的index
			// 取index然后获取数据数组中对应index中的值
			// 用来对比数值数组中的结果
			const [
				firstColumnInSquareIndex,
				secondColumnInSquareIndex,
				thirdColumnInSquareIndex,
			] = winResultList[rowIndex];
			if (
				square[firstColumnInSquareIndex] &&
				square[firstColumnInSquareIndex] ===
					square[secondColumnInSquareIndex] &&
				square[firstColumnInSquareIndex] === square[thirdColumnInSquareIndex]
			) {
				return square[firstColumnInSquareIndex];
			}
		}
		return null;
	}

	return (
		<>
			<section className="status">{status}</section>
			{ticTacToeContent}
		</>
	);
}
