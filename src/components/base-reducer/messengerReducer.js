export const initialState = {
	selectedId: 0,
	message: {
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
				message: action.message,
			};
		}
		case 'sent_message': {
			return {
				...state,
				message: '',
			};
		}
		default: {
			throw Error('未知 action：' + action.type);
		}
	}
}