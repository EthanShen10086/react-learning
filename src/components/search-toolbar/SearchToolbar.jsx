import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
	// const [searchText, setSearchText] = useState('');
	// const [filterList, setFilterList] = useState([...foods]);
	// const handleChangeSearchText = (value) => {
	// 	const originalData = foods.slice();
	// 	console.log(value, '== handleChangeSearchText');
	// 	// 如果用 filterList 在第一次获取的数据空的时候filterList就会为[] 那么逻辑就有问题
	// 	const result = originalData.filter((item) => {
	// 		console.log(item, value, item.description.includes(value));
	// 		if (item.description.includes(value)) {
	// 			return item;
	// 		}
	// 	});
	// 	setFilterList(result);
	// 	setSearchText(value);
	// };
	const [query, setQuery] = useState('');
	const filterList = filterItems(foods, query);

	function handleChange(e) {
		setQuery(e.target.value);
	}
	return (
		<>
			<SearchBar searchText={query} onSearch={handleChange} />
			<hr />
			<List items={filterList} />
		</>
	);
}

function SearchBar({ searchText, onSearch }) {
	return (
		<label>
			搜索： <input value={searchText} onChange={onSearch} />
		</label>
	);
}

function List({ items }) {
	return (
		<table>
			<tbody>
				{items.map((food) => (
					<tr key={food.id}>
						<td>{food.name}</td>
						<td>{food.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
