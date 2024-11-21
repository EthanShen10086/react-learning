import PropTypes from 'prop-types';

GameHistory.propTypes = {
	children: PropTypes.array,
};
export default function GameHistory({ children }) {
	return (
		<>
			<section className="game-info">
				<ol> {children}</ol>
			</section>
		</>
	);
}
