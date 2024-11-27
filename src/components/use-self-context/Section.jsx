import { LevelContext } from './LevelContext';
import { useContext } from 'react';
export default function Section({ children, isFancy }) {
	const level = useContext(LevelContext);
	return (
		<section className={'section ' + (isFancy ? 'fancy' : '')}>
			{/* “如果在 <Section> 组件中的任何子组件请求 LevelContext，给他们这个 level。”
			组件会使用 UI 树中在它上层最近的那个 <LevelContext.Provider> 传递过来的值。 */}
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	);
}
