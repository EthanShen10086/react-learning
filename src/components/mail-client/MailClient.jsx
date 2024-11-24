import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.jsx';
import './style.css';
export default function MailClient() {
	const [letters, setLetters] = useState(initialLetters);
	const [highlightedLetter, setHighlightedLetter] = useState(null);
	console.log(highlightedLetter, '== highlightedLetter 222');

	function handleHover(letter) {
		setHighlightedLetter(letter);
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
		console.log(highlightedLetter, '== highlightedLetter');
		setHighlightedLetter(highlightedLetter);
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
						isHighlighted={letter?.id === highlightedLetter?.id}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
