import { useState, useEffect } from 'react';
import StoryTray from './StoryTray.jsx';

let initialStories = [
	{ id: 0, label: "Ankit's Story" },
	{ id: 1, label: "Taylor's Story" },
];

export default function StoryTrayApp() {
	let [stories, setStories] = useState([
		...initialStories
	]);
	let time = useTime();
	// HACK: Prevent the memory from growing forever while you read docs.
	// We're breaking our own rules here.
	if (stories.length > 100) {
		stories.length = 100;
	}

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				textAlign: 'center',
			}}
		>
			<h2>It is {time.toLocaleTimeString()} now.</h2>
			<StoryTray stories={stories} />
		</div>
	);
}

function useTime() {
	const [time, setTime] = useState(() => new Date());
	useEffect(() => {
		const id = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(id);
	}, []);
	return time;
}

// function handleAddStory() {
// 	useEffect(() => {
// 		setStories((prevStories) => {
// 			// 避免重复添加 "Create Story"
// 			if (!prevStories.some((story) => story.id === 'create')) {
// 				return [
// 					...prevStories,
// 					{
// 						id: 'create',
// 						label: 'Create Story',
// 					},
// 				];
// 			}
// 			return prevStories;
// 		});
// 	}, []); // 空依赖数组，确保只在组件挂载时运行
// }
