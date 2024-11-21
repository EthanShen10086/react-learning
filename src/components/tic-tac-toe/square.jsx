import PropTypes from 'prop-types';
// import { useState } from 'react';

Square.propTypes = {
	squareValue: PropTypes.number,
	setSquareClick: PropTypes.func,
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

export default function Square({ squareValue, setSquareClick, squareKey }) {
	// 将状态放在父组件进行控制
	const handleClick = () => {
		setSquareClick('X');
	};
	return (
		<button className="square" onClick={handleClick} key={squareKey}>
			{squareValue}
		</button>
	);
}
