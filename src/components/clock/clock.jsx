import PropTypes from 'prop-types';

Clock.propTypes = {
	time: PropTypes.instanceOf(Date),
};
export default function Clock({ time }) {
	let hours = time.getHours();
	let clockStyle;
    //  Cannot set properties of null (setting 'className') 
	// if (hours >= 0 && hours <= 6) {
	//   document.getElementById('time').className = 'night';
	// } else {
	//   document.getElementById('time').className = 'day';
	// }
	if (hours >= 0 && hours <= 6) {
		clockStyle = 'night';
	} else {
		clockStyle = 'day';
	}
	return (
		<h1 id="time" className={ clockStyle }>
			{time.toLocaleTimeString()}
		</h1>
	);
}
