import PropTypes from 'prop-types';
import { useMemo } from 'react';

Clock.propTypes = {
	time: PropTypes.instanceOf(Date),
};
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
		<h1 id="time" className={clockClassName}>
			{time.toLocaleTimeString()}
		</h1>
	);
}
