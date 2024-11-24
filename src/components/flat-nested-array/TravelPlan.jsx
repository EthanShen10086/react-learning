import { useState } from 'react';
import AddItem from './AddItem.jsx';
import PackingList from './ParkingList.jsx';

let nextId = 3;
const initialItems = [
	{ id: 0, title: 'Warm socks', packed: true },
	{ id: 1, title: 'Travel journal', packed: false },
	{ id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan2() {
	const [items, setItems] = useState(initialItems);
	const [total, setTotal] = useState(3);
	// const [packed, setPacked] = useState(1);
	const packed = items.filter((item) => item.packed).length;

	function handleAddItem(title) {
		setTotal(total + 1);
		setItems([
			...items,
			{
				id: nextId++,
				title: title,
				packed: false,
			},
		]);
	}

	function handleChangeItem(nextItem) {
		// if (nextItem.packed) {
		// 	setPacked(packed + 1);
		// } else {
		// 	setPacked(packed - 1);
		// }
		setItems(
			items.map((item) => {
				if (item.id === nextItem.id) {
					return nextItem;
				} else {
					return item;
				}
			})
		);
	}

	function handleDeleteItem(itemId) {
		// const pickedItem = items.find((item) => item.id === itemId);
		// if (pickedItem.packed) {
		// 	setPacked(packed - 1);
		// }
		setTotal(total - 1);
		setItems(items.filter((item) => item.id !== itemId));
	}

	return (
		<>
			<AddItem onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onChangeItem={handleChangeItem}
				onDeleteItem={handleDeleteItem}
			/>
			<hr />
			<b>
				{packed} out of {total} packed!
			</b>
		</>
	);
}
