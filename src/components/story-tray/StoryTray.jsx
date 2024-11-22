export default function StoryTray({ stories, addStory }) {
	// stories.push({
	//   id: 'create',
	//   label: 'Create Story'
	// });
// 错误的答案 反而导致直接无限循环了
	// addStory([
	// 	...stories,
	// 	{
	// 		id: 'create',
	// 		label: 'Create Story',
	// 	},
	// ]);

	return (
		<ul>
			{stories.map((story) => (
				<li key={story.id}>{story.label}</li>
			))}
		</ul>
	);
}
