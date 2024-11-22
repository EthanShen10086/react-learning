export default function StoryTray({ stories }) {
	// 复制数组！
	let storiesToDisplay = stories.slice();

	// 不影响原始数组：
	storiesToDisplay.push({
		id: 'create',
		label: 'Create Story',
	});
	return (
		<ul>
			{storiesToDisplay.map((story) => (
				<li key={story.id}>{story.label}</li>
			))}
		</ul>
	);
}
