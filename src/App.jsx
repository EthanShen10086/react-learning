import './App.css';
import { TestRouter } from './components/test-router';
import OriginApp from './components/origin-app';
import { TicTacToe } from './components/tic-tac-toe';
import RecipeList from './components/receipt/receipt';
import Poem from './components/poem/poem';
import CollapseApp from './components/collapse-panel/App';
import StoryTrayApp from './components/story-tray/StoryTrayApp';
import PreviousButtonApp from './components/previous-button/PreviousButtonApp';
import RequestTracker from './components/times-counter/TimesCounter';
import UseSelfStateApp from './components/useSelfState/UseSelfStateApp';
import MovingDot from './components/moving-dot/MovingDot';
import Canvas from './components/drag-box/DragBox';
import Form from './components/form/BaseForm';
import TravelPlan from './components/flat-nested-array/FlatNestedArray';
import TravelPlan2 from './components/flat-nested-array/TravelPlan';
import MailClient from './components/mail-client/MailClient';
import CheckboxGroup from './components/checkbox-group/CheckboxGroup';
import FilterableList from './components/search-toolbar/SearchToolbar';
import TaskApp from './components/base-reducer/BaseReducer';
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
						<Route path="/times-counter" Component={RequestTracker}></Route>
						<Route path="/process-queue" Component={UseSelfStateApp}></Route>
						<Route path="/moving-dot" Component={MovingDot}></Route>
						<Route path="/drag-box" Component={Canvas}></Route>
						<Route path="/form" Component={Form}></Route>
						{/* <Route path="/flat-nested-array" Component={TravelPlan}></Route> */}
						<Route path="/travel-plan" Component={TravelPlan2}></Route>
						<Route path="/highlight-letter" Component={MailClient}></Route>
						<Route path="/checkbox-group" Component={CheckboxGroup}></Route>
						<Route path="/search-toolbar" Component={FilterableList}></Route>
						<Route path="/base-reducer" Component={TaskApp}></Route>
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
