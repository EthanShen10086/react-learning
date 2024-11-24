import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.jsx';
import './style.css';
export default function MailClient() {
	const [letters, setLetters] = useState(initialLetters);
	// const [highlightedLetter, setHighlightedLetter] = useState(null);
	const [highlightedId, setHighlightedId] = useState(null);

	function handleHover(letterId) {
		setHighlightedId(letterId);
	}

	function handleStar(starred) {
		setLetters(
			letters.map((letter) => {
				if (letter.id === starred.id) {
					return {
						...letter,
						isStarred: !letter.isStarred,
					};
				} else {
					return letter;
				}
			})
		);
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						// 当你在按钮点击后更新 letters 数组时，会创建一个新的信件对象，它与 highlightedLetter 不同。这就是 highlightedLetter === letter 执行变为 false，并且高亮消失的原因。当指针移动时下一次调用 setHighlightedLetter 时它会重新出现。
						isHighlighted={letter.id === highlightedId}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
