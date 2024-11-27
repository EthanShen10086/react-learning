import { LevelContext } from './LevelContext';
export default function Section({ level, children }) {
	return (
		<section className="section">
			{/* “如果在 <Section> 组件中的任何子组件请求 LevelContext，给他们这个 level。”
			组件会使用 UI 树中在它上层最近的那个 <LevelContext.Provider> 传递过来的值。 */}
			<LevelContext.Provider value={level}>{children}</LevelContext.Provider>
		</section>
	);
}
