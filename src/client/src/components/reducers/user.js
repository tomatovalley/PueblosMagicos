const defaultState = [];

function user(state = defaultState, { type, payload }){
	switch (type) {
		case 'login': {
			return Object.assign(state, { payload });
		}

		default:
			return state;
	}
}

export default user;