const defaultState = {
	user:[],
	isLoggedIn: false,
};

function user(state = defaultState, { type, payload }){
	switch (type) {
		case 'login': {
			return {
				...state,
				user: payload,
				isLoggedIn : true,
		}
		}

		case 'logout': {
			return defaultState
		}

		default:
			return state;
	}
}

export default user;