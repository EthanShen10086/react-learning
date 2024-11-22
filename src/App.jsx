import './App.css';
import { TestRouter } from './components/test-router';
import OriginApp from './components/origin-app';
import { TicTacToe } from './components/tic-tac-toe';
import RecipeList from './components/receipt/receipt';
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
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
