import Clock from '../clock/clock';
import BucketList from '../gift-list/GiftList';
const poem = {
	lines: [
		'I write, erase, rewrite',
		'Erase again, and then',
		'A poppy blooms.',
	],
};

export default function Poem() {
	return (
		<article>
			<BucketList />
			<Clock time={new Date()} />
			{poem.lines.map((line, index) => {
				return (
					<div key={index}>
						<p>{line}</p>
						{index <= 1 && <hr />}
					</div>
				);
			})}
		</article>
	);
}
