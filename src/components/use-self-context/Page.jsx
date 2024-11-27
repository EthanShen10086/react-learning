import Heading from './Heading.jsx';
import Section from './Section.jsx';
import ImageSizeContext from '../image-size-context/ImageSizeContext.jsx';
import './style.css';
export default function Page() {
	{
		/* “如果在 <Section> 组件中的任何子组件请求 LevelContext，给他们这个 level。”
			组件会使用 UI 树中在它上层最近的那个 <LevelContext.Provider> 传递过来的值。 */
	}
	return (
		<>
			<ImageSizeContext />
			<ProfilePage />
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
		</>
	);
}

export function ProfilePage() {
	return (
		<Section>
			<Heading>My Profile</Heading>
			<Post title="旅行者，你好！" body="来看看我的冒险。" />
			<AllPosts />
		</Section>
	);
}

function AllPosts() {
	return (
		<Section>
			<Heading>帖子</Heading>
			<RecentPosts />
		</Section>
	);
}

function RecentPosts() {
	return (
		<Section>
			{/* 孙子组件使用了父组件的Post 同样获取到了isFancy
			section组件的level是正常传递的
			*/}
			<Heading>最近的帖子</Heading>
			<Post title="里斯本的味道" body="...那些蛋挞！" />
			<Post title="探戈节奏中的布宜诺斯艾利斯" body="我爱它！" />
		</Section>
	);
}

function Post({ title, body }) {
	return (
		<Section isFancy={true}>
			<Heading>{title}</Heading>
			<p>
				<i>{body}</i>
			</p>
		</Section>
	);
}
