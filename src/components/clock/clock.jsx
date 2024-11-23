import PropTypes from 'prop-types';
import { useMemo } from 'react';

Clock.propTypes = {
	time: PropTypes.instanceOf(Date),
};

export function CaptureExample() {
	function handleCapture(event, flag) {
		console.log('Capture:', event.target.tagName, 'flag== ', flag);
	}

	function handleBubble(event, flag) {
		console.log('Bubble:', event.target.tagName, 'flag== ', flag);
	}

	return (
		<div
			onClick={(e) => {
				handleBubble(e, 'div');
			}}
			onClickCapture={(e) => {
				handleCapture(e, 'div');
			}}
			style={{ padding: '20px', backgroundColor: 'lightblue' }}
		>
			<button
				onClick={(e) => {
					handleBubble(e, 'button');
				}}
				onClickCapture={(e) => {
					handleCapture(e, 'button');
				}}
				style={{ padding: '10px', backgroundColor: 'lightcoral' }}
			>
				Click Me
			</button>
		</div>
	);
}

export default function Clock({ time }) {
	//  Cannot set properties of null (setting 'className')
	// if (hours >= 0 && hours <= 6) {
	//   document.getElementById('time').className = 'night';
	// } else {
	//   document.getElementById('time').className = 'day';
	// }

	const clockClassName = useMemo(() => {
		if (!time) return;
		let hours = time.getHours();
		console.log(hours, '== hours');
		return hours >= 0 && hours <= 6 ? 'day' : 'night';
	}, [time]);

	return (
		<>
			<CaptureExample />
			<h1 id="time" className={clockClassName}>
				{time.toLocaleTimeString()}
			</h1>
		</>
	);
}
