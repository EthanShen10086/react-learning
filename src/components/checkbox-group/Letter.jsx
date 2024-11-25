export default function Letter({ letter, onToggle, isSelected }) {
	return (
		<li className={isSelected ? 'selected' : ''}>
			<label>
				<input
					type="checkbox"
					checked={isSelected}
					onChange={() => {
						console.log(letter.id, letter);
						onToggle(letter.id);
					}}
				/>
				{letter.subject}
			</label>
		</li>
	);
}
