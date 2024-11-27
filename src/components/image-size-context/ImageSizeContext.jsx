import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';

export default function ImageSizeContext2() {
	const [isLarge, setIsLarge] = useState(false);
	return (
		<>
			<label>
				<input
					type="checkbox"
					checked={isLarge}
					onChange={(e) => {
						setIsLarge(e.target.checked);
					}}
				/>
				Use large images
			</label>
			<hr />
			{/* 必须使用value进行传值 */}
			{/* 传值可以与定义的context无关 */}
			<ImageSizeContext.Provider value={isLarge ? 150 : 100}>
				<List />
			</ImageSizeContext.Provider>
		</>
	);
}

function List() {
	const listItems = places.map((place) => (
		<li key={place.id}>
			<Place place={place} />
		</li>
	));
	return <ul>{listItems}</ul>;
}

function Place({ place }) {
	return (
		<>
			<PlaceImage place={place} />
			<p>
				<b>{place.name}</b>
				{': ' + place.description}
			</p>
		</>
	);
}

function PlaceImage({ place }) {
	const imgSize = useContext(ImageSizeContext);
	console.log(imgSize, '== useContext');
	return (
		<img
			src={getImageUrl(place)}
			alt={place.name}
			width={imgSize}
			height={imgSize}
		/>
	);
}
