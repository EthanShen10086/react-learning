import Heading from './Heading.jsx';
import Section from './Section.jsx';

export default function Page() {
	{
		/* “如果在 <Section> 组件中的任何子组件请求 LevelContext，给他们这个 level。”
			组件会使用 UI 树中在它上层最近的那个 <LevelContext.Provider> 传递过来的值。 */
	}
	return (
		<Section>
			<Heading>主标题</Heading>
			<Section>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Section>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Section>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
					</Section>
				</Section>
			</Section>
		</Section>
	);
}
