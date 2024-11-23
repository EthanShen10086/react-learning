import { useState } from 'react';

export default function RequestTracker() {
	const [pending, setPending] = useState(0);
	const [completed, setCompleted] = useState(0);

	async function handleClick() {
		setPending((pending) => pending + 1);
		await delay(3000);
		// 因为这里有异步 所以他不会直接执行最后一个 而是等待副作用结束之后在执行
		setPending((pending) => pending - 1);
		setCompleted(completed + 1);
	}

	return (
		<>
			<h3>等待：{pending}</h3>
			<h3>完成：{completed}</h3>
			<button onClick={handleClick}>购买</button>
		</>
	);
}

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
