import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

Clock.propTypes = {
	time: PropTypes.instanceOf(Date),
};

export function FeedbackForm() {
	const [isSent, setIsSent] = useState(false);
	//  React 使用 Hook 的调用顺序 来匹配每次渲染中的 Hook 状态。
	// 如果 useState 或其他 Hooks 被放在条件语句或分支中，调用顺序可能会变化，导致 React 无法正确匹配对应的 Hook。
	// Rendered fewer hooks than expected. This may be caused by an accidental early return statement.
	const [message, setMessage] = useState('');
	if (isSent) {
		return <h1>Thank you!</h1>;
	} else {
		// eslint-disable-next-line
		// const [message, setMessage] = useState('');
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(`Sending: "${message}"`);
					setIsSent(true);
				}}
			>
				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<br />
				<button type="submit">Send</button>
			</form>
		);
	}
}

export function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// 	let firstName = '';
	//   let lastName = '';

	function handleFirstNameChange(e) {
		const result = e.target.value;
		setFirstName(result);
		// firstName = e.target.value;
		// 如果没有改变状态是不会重新渲染UI的
	}

	function handleLastNameChange(e) {
		const result = e.target.value;
		setLastName(result);
	}

	function handleReset() {
		setFirstName('');
		setLastName('');
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				placeholder="First name"
				value={firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last name"
				value={lastName}
				onChange={handleLastNameChange}
			/>
			<h1>
				Hi, {firstName} {lastName}
			</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}

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

export function Scoreboard() {
	const [player, setPlayer] = useState({
		firstName: 'Ranjani',
		lastName: 'Shettar',
		score: 10,
	});

	function handlePlusClick() {
		const result = {
			...player,
			// 为什么这里player.score++就不行
			// player.score++ 修改了原始 player 对象中的 score 值（副作用）
			// 而且先直接返回score导致返回的永远都是原有值
			// score: ++player.score,
			score: player.score + 1,
		};
		console.log(result, '== result');
		setPlayer(result);
	}

	function handleFirstNameChange(e) {
		setPlayer({
			...player,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e) {
		setPlayer({
			...player,
			lastName: e.target.value,
		});
	}

	return (
		<>
			<label>
				Score: <b>{player.score}</b>{' '}
				<button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input value={player.firstName} onChange={handleFirstNameChange} />
			</label>
			<label>
				Last name:
				<input value={player.lastName} onChange={handleLastNameChange} />
			</label>
		</>
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
			<Scoreboard />
			<FeedbackForm />
			<Form />
			<CaptureExample />
			<h1 id="time" className={clockClassName}>
				{time.toLocaleTimeString()}
			</h1>
		</>
	);
}
