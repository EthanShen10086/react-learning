import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import tasksReducer from './taskReducer.js';
export default function TaskApp() {
	// 这里的taskReducer就是一个状态机一样的东西
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	function handleAddTask(text) {
		dispatch({
			type: 'added',
			id: nextId++,
			text: text,
		});
	}

	function handleChangeTask(task) {
		dispatch({
			type: 'changed',
			task: task,
		});
	}

	function handleDeleteTask(taskId) {
		dispatch({
			type: 'deleted',
			id: taskId,
		});
	}

	return (
		<>
			<h1>布拉格的行程安排</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
}

// function tasksReducer(tasks, action) {
// 	switch (action.type) {
// 		case 'added': {
// 			return [
// 				...tasks,
// 				{
// 					id: action.id,
// 					text: action.text,
// 					done: false,
// 				},
// 			];
// 		}
// 		case 'changed': {
// 			return tasks.map((t) => {
// 				if (t.id === action.task.id) {
// 					return action.task;
// 				} else {
// 					return t;
// 				}
// 			});
// 		}
// 		case 'deleted': {
// 			return tasks.filter((t) => t.id !== action.id);
// 		}
// 		default: {
// 			throw Error('未知 action: ' + action.type);
// 		}
// 	}
// }

let nextId = 3;
const initialTasks = [
	{ id: 0, text: '参观卡夫卡博物馆', done: true },
	{ id: 1, text: '看木偶戏', done: false },
	{ id: 2, text: '打卡列侬墙', done: false },
];
