import { useState } from 'react';
import { sculptureList } from './data.js';

function PreviousButton({ showPrevious }) {
	return <button onClick={showPrevious}>Previous</button>;
}

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		setIndex(index + 1);
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}
	function handelPreviewClick() {
		setIndex(index - 1);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			{index < sculptureList.length - 1 ? (
				<button onClick={handleNextClick}>Next</button>
			) : (
				<PreviousButton showPrevious={handelPreviewClick} />
			)}
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? 'Hide' : 'Show'} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}
