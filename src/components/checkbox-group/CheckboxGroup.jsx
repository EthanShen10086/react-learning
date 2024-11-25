import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.jsx';

export default function CheckboxGroup() {
	// const [selectedId, setSelectedId] = useState(null);
	// const [selectedIdList, setSelectedIdList] = useState([]);
	const [selectedIds, setSelectedIds] = useState(new Set());

	// TODO: 支持多选
	// const selectedCount = 1;
	// const selectedCount = selectedIdList.length;
	const selectedCount = selectedIds.size;

	function handleToggle(toggledId) {
		// TODO: 支持多选
		// setSelectedId(toggledId);
		// if (selectedIdList.includes(toggledId)) {
		// 	// const [first, ...rest] = array 是一种常见的解构方式，用来从数组中提取第一个元素 (first) 和剩余元素 (rest)。
		// 	// 所以永远都会取第一个元素 这会导致bug
		// 	// const [toggledId, ...rest] = selectedIdList;
		// 	// console.log(toggledId, rest, '== handleToggle pop', selectedIdList);
		// 	// setSelectedIdList([...rest]);
		// 	const result = selectedIdList.filter((item) => item !== toggledId);
		// 	console.log(selectedIdList, toggledId, result);
		// 	setSelectedIdList(result);
		// } else {
		// 	console.log(toggledId, '== push');
		// 	setSelectedIdList([...selectedIdList, toggledId]);
		// }
		// Create a copy (to avoid mutation).
		const nextIds = new Set(selectedIds);
		if (nextIds.has(toggledId)) {
			nextIds.delete(toggledId);
		} else {
			nextIds.add(toggledId);
		}
		setSelectedIds(nextIds);
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isSelected={
							// TODO: 支持多选
							// letter.id === selectedId
							// selectedIdList.includes(letter.id)
							selectedIds.has(letter.id)
						}
						onToggle={handleToggle}
					/>
				))}
				<hr />
				<p>
					<b>You selected {selectedCount} letters</b>
				</p>
			</ul>
		</>
	);
}
