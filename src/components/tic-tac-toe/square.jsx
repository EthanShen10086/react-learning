import PropTypes from 'prop-types';
// import { useState } from 'react';

Square.propTypes = {
	squareValue: PropTypes.string,
	onSquareClick: PropTypes.func,
	squareKey: PropTypes.number,
};

// export default function Square() {

// 	const [value, setValue] = useState(null)
// 	// 将状态放在父组件进行控制
// 	const handleClick = () => {
// 		setValue('X');
// 	};
// 	return (
// 		<button className="square" onClick={handleClick}>
// 			{value}
// 		</button>
// 	);
// }

export default function Square({ squareValue, onSquareClick, squareKey }) {
	// 将状态放在父组件进行控制
	return (
		// 请注意 你不能使用 onSquareClick(squareKey)
		//因为这样的意思是调用函数 而调用函数会改变组件state 又会导致再次渲染
		// 渲染又会导致再次运行 onSquareClick(squareKey)
		// 所以这里使用箭头函数 来 传参数同时不调用
		<button
			className="square"
			onClick={() => {
				onSquareClick(squareKey);
			}}
			key={squareKey}
		>
			{squareValue}
		</button>
	);
}
