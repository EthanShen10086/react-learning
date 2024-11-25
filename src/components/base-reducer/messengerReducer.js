export const initialState = {
	selectedId: 0,
	messages: {
		0: 'Taylor',
		1: 'Alice',
		2: 'Bob',
	},
};

export function messengerReducer(state, action) {
	switch (action.type) {
		case 'changed_selection': {
			return {
				...state,
				selectedId: action.contactId,
			};
		}
		case 'edited_message': {
			return {
				...state,
				messages: {
					...state.messages,
					[state.selectedId]: action.message,
				},
			};
		}
		case 'sent_message': {
			return {
				...state,
				messages: {
					...state.messages,
					[state.selectedId]: '',
				},
			};
		}
		default: {
			throw Error('未知 action：' + action.type);
		}
	}
}
