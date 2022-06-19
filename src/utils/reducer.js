const Reducer = (state, action) => {
	switch(action.type) {
		case 'setProjects': {
			return {
				...state,
				projects: action.data
			}
		}
		case 'addProject': {
			return {
				...state,
				projects: [action.data, ...state.projects]
			}
		}
		default: return state
	}
}

export default Reducer;