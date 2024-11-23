import { useState } from 'react';
import { sculptureList } from './data.js';
import PropTypes from 'prop-types';
PreviousButton.propTypes = {
	isDisable: PropTypes.bool,
	showPrevious: PropTypes.func,
};

function PreviousButton({ showPrevious, isDisable }) {
	return (
		// disable属性应该添加在button组件 在PreviousButton 添加disable属性是没用的
		<button onClick={showPrevious} disabled={isDisable}>
			Previous
		</button>
	);
}

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);
	// index >= length - 1不展示Next
	const isNextDisable = () => {
		return index >= sculptureList.length - 1;
	};
	// index <= 0 时不展示Previous
	const isPreviousDisable = () => {
		return index <= 0;
	};
	console.log(isNextDisable(), isPreviousDisable(), index);
	function handleNextClick() {
		if (isNextDisable()) {
			return;
		}
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
			<button onClick={handleNextClick} disabled={isNextDisable()}>
				Next
			</button>
			<PreviousButton
				showPrevious={handelPreviewClick}
				isDisable={isPreviousDisable()}
			/>
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
