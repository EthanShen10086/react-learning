import { useImmerReducer } from 'use-immer';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

import { useReducer } from 'react';
import Chat from './Chat.jsx';
import ContactList from './ContactList.jsx';
import { initialState, messengerReducer } from './messengerReducer';
function tasksReducer(draft, action) {
	switch (action.type) {
		case 'added': {
			draft.push({
				id: action.id,
				text: action.text,
				done: false,
			});
			break;
		}
		case 'changed': {
			const index = draft.findIndex((t) => t.id === action.task.id);
			draft[index] = action.task;
			break;
		}
		case 'deleted': {
			return draft.filter((t) => t.id !== action.id);
		}
		default: {
			throw Error('未知 action：' + action.type);
		}
	}
}

export default function TaskApp() {
	const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

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
			<Messenger />
			<p>分割线</p>
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

let nextId = 3;
const initialTasks = [
	{ id: 0, text: '参观卡夫卡博物馆', done: true },
	{ id: 1, text: '看木偶戏', done: false },
	{ id: 2, text: '打卡列侬墙', done: false },
];

export function Messenger() {
	const [state, dispatch] = useReducer(messengerReducer, initialState);
	const message = state.messages[state.selectedId];
	const contact = contacts.find((c) => c.id === state.selectedId);
	return (
		<div>
			<ContactList
				contacts={contacts}
				selectedId={state.selectedId}
				dispatch={dispatch}
			/>
			<Chat
				key={contact.id}
				message={message}
				contact={contact}
				dispatch={dispatch}
			/>
		</div>
	);
}

const contacts = [
	{ id: 0, name: 'Taylor', email: 'taylor@mail.com' },
	{ id: 1, name: 'Alice', email: 'alice@mail.com' },
	{ id: 2, name: 'Bob', email: 'bob@mail.com' },
];
