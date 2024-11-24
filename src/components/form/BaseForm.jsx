import { useState } from 'react';
import './style.css';
export function Picture() {
	// const [isActive, setIsActive] = useState(false);
	// let backgroundClassName = 'background';
	// let pictureClassName = 'picture';
	// if (isActive) {
	// 	pictureClassName += ' picture--active';
	// } else {
	// 	backgroundClassName += ' background--active';
	// }

	// return (
	// 	<div className={backgroundClassName} onClick={() => setIsActive(false)}>
	// 		<img
	// 			onClick={(e) => {
	// 				e.stopPropagation();
	// 				setIsActive(true);
	// 			}}
	// 			className={pictureClassName}
	// 			alt="Rainbow houses in Kampung Pelangi, Indonesia"
	// 			src="https://i.imgur.com/5qwVYb1.jpeg"
	// 		/>
	// 	</div>
	// );
	const [isBgActive, setIsActive] = useState(true);

	return (
		// react 不允许同时出现两个className
		<div
			// className="picture"
			// className={`picture ${isActive && 'picture--active'}`}
			className={`background ${isBgActive ? 'background--active' : ''}`}
			onClick={() => setIsActive(true)}
		>
			<img
				onClick={(e) => {
					e.stopPropagation();
					setIsActive(false);
				}}
				className={`picture ${isBgActive ? '' : 'picture--active'}`}
				alt="Rainbow houses in Kampung Pelangi, Indonesia"
				src="https://i.imgur.com/5qwVYb1.jpeg"
			/>
		</div>
	);
}

export default function Form() {
	const [answer, setAnswer] = useState('');
	const [error, setError] = useState(null);
	const [status, setStatus] = useState('typing');

	if (status === 'success') {
		return <h1>That's right!</h1>;
	}

	async function handleSubmit(e) {
		// 表单提交默认会刷新页面 这样会丢失状态
		e.preventDefault();
		setStatus('submitting');
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
			setError(err);
		}
	}

	function handleTextareaChange(e) {
		setAnswer(e.target.value);
	}

	return (
		<>
			<Picture />
			<h2>City quiz</h2>
			<p>
				In which city is there a billboard that turns air into drinkable water?
			</p>
			<form onSubmit={handleSubmit}>
				<textarea
					value={answer}
					onChange={handleTextareaChange}
					disabled={status === 'submitting'}
				/>
				<br />
				<button disabled={answer.length === 0 || status === 'submitting'}>
					Submit
				</button>
				{error !== null && <p className="Error">{error.message}</p>}
			</form>
		</>
	);
}

function submitForm(answer) {
	// Pretend it's hitting the network.
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let shouldError = answer.toLowerCase() !== 'lima';
			if (shouldError) {
				reject(new Error('Good guess but a wrong answer. Try again!'));
			} else {
				resolve();
			}
		}, 1500);
	});
}
