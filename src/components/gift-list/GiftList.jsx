import { useState } from 'react';

let nextId = 3;
const initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true },
];

const initialProducts = [
	{
		id: 0,
		name: 'Baklava',
		count: 1,
	},
	{
		id: 1,
		name: 'Cheese',
		count: 5,
	},
	{
		id: 2,
		name: 'Spaghetti',
		count: 2,
	},
];

export function ShoppingCart() {
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		const productListCopy = products.slice();
		const targetIndex = productListCopy.findIndex(
			(item) => item.id === productId
		);
		if (targetIndex !== -1) {
			productListCopy[targetIndex] = {
				...productListCopy[targetIndex],
				count: productListCopy[targetIndex].count + 1,
			};
		}
		setProducts(productListCopy);
	}
	function handleDecreaseClick(productId) {
		const productListCopy = products.slice();
		const targetIndex = productListCopy.findIndex(
			(item) => item.id === productId
		);
		if (targetIndex !== -1) {
			productListCopy[targetIndex] = {
				...productListCopy[targetIndex],
				count: productListCopy[targetIndex].count - 1,
			};
		}
		setProducts(productListCopy);
	}

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							handleDecreaseClick(product.id);
						}}
					>
						–
					</button>
				</li>
			))}
		</ul>
	);
}

export default function BucketList() {
	const [myList, setMyList] = useState(initialList);
	const [yourList, setYourList] = useState(initialList);

	function handleToggleMyList(artworkId, nextSeen) {
		const myNextList = [...myList];
		const artwork = myNextList.find((a) => a.id === artworkId);
		// 错误的做法
		// artwork.seen = nextSeen;
		// setMyList(myNextList);
		// const result = [...myList, { ...artwork, seen: nextSeen }];
		// 正确的方案
		// const restArtWork = myNextList.filter((item) => item.id !== artwork.id);
		// const result = [...restArtWork, { ...artwork, seen: nextSeen }];
		// 使用map
		// const result = myNextList.map((item) => {
		// 	// if (item.id === artworkId) {
		// 	// 	return {
		// 	// 		...item,
		// 	// 		seen: nextSeen,
		// 	// 	};
		// 	// }
		// 	// return item;
		// 	return item.id === artworkId ? { ...item, seen: nextSeen } : item;
		// });
		const targetIndex = myNextList.findIndex((item) => item.id === artworkId);
		if (targetIndex !== -1) {
			myNextList[targetIndex] = { ...myNextList[targetIndex], seen: nextSeen };
		}
		console.log(initialList, myList, myNextList);

		setMyList(myNextList);
		// setMyList(result);
	}

	function handleToggleYourList(artworkId, nextSeen) {
		const yourNextList = [...yourList];
		const artwork = yourNextList.find((a) => a.id === artworkId);
		const restArtWork = yourNextList.filter((item) => item.id !== artwork.id);
		const result = [...restArtWork, { ...artwork, seen: nextSeen }];
		setYourList(result);
	}

	return (
		<>
			<ShoppingCart />
			<h1>艺术愿望清单</h1>
			<h2>我想看的艺术清单：</h2>
			<ItemList artworks={myList} onToggle={handleToggleMyList} />
			<h2>你想看的艺术清单：</h2>
			<ItemList artworks={yourList} onToggle={handleToggleYourList} />
		</>
	);
}

function ItemList({ artworks, onToggle }) {
	return (
		<ul>
			{artworks.map((artwork) => (
				<li key={artwork.id}>
					<label>
						<input
							type="checkbox"
							checked={artwork.seen}
							onChange={(e) => {
								onToggle(artwork.id, e.target.checked);
							}}
						/>
						{artwork.title}
					</label>
				</li>
			))}
		</ul>
	);
}
