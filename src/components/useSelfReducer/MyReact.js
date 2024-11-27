import { useState } from 'react';

export function useReducer(reducer, initialState) {
	const [state, setState] = useState(initialState);

	// ???
	function dispatch(action) {
		const result = reducer(state, action);
		setState(result);
	}

	return [state, dispatch];
}
