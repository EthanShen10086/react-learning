import { useState } from 'react';

export function useReducer(reducer, initialState) {
	const [state, setState] = useState(initialState);

	// ???
	const result = reducer(state)

	return [state, dispatch];
}
