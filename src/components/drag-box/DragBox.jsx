// import { useState } from 'react';
import Background from './Background.jsx';
import Box from './Box.jsx';
import { useImmer } from 'use-immer';

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas() {
	const [shape, setShape] = useImmer({
		color: 'orange',
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		setShape((shape) => {
			shape.position = {
				x: (shape.position.x + dx),
				y: (shape.position.y + dy),
			};
		});
		// shape.position.x += dx;
		// shape.position.y += dy;
	}

	function handleColorChange(e) {
		setShape((shape) => {
			shape.color = e.target.value;
		});
	}

	return (
		<>
			<select value={shape.color} onChange={handleColorChange}>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box color={shape.color} position={shape.position} onMove={handleMove}>
				Drag me!
			</Box>
		</>
	);
}
