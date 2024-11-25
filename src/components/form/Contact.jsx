import { useState } from 'react';

export default function Contact({ contact }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<p>
				<b>{contact.name}</b>
			</p>
			{expanded && (
				<p>
					<i>{contact.email}</i>
				</p>
			)}
			<button
				onClick={() => {
					setExpanded(!expanded);
				}}
			>
				{expanded ? '隐藏' : '显示'}邮箱
			</button>
		</>
	);
}
