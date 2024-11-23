import './App.css';
import { TestRouter } from './components/test-router';
import OriginApp from './components/origin-app';
import { TicTacToe } from './components/tic-tac-toe';
import RecipeList from './components/receipt/receipt';
import Poem from './components/poem/poem';
import CollapseApp from './components/collapse-panel/App';
import StoryTrayApp from './components/story-tray/StoryTrayApp';
import PreviousButtonApp from './components/previous-button/PreviousButtonApp';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<section className="test-router">
				<BrowserRouter>
					{/* 这里是跳转用的 你也可以在地址栏直接切换路由 */}
					<Link to="/test-router">test路由 不加名称没样式出不来</Link>
					<Routes>
						{/* <Route path='/user' element={<TestRouter />} /> */}
						<Route path="/test-router" Component={TestRouter}></Route>
						<Route path="/origin-app" Component={OriginApp}></Route>
						<Route path="/tic-tac-toe" Component={TicTacToe}></Route>
						<Route path="/receipt" Component={RecipeList}></Route>
						<Route path="/poem" Component={Poem}></Route>
						<Route path="/collapse-panel" Component={CollapseApp}></Route>
						<Route path="/story-tray" Component={StoryTrayApp}></Route>
						<Route
							path="/previous-button"
							Component={PreviousButtonApp}
						></Route>
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
