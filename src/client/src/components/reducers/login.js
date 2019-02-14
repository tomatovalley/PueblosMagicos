const initialState = false;

function login (state = initialState, { type, payload }) {
  switch (type) {
		case 'IS_LOGGED_IN':
			return Object.assign(state, { payload });

		case 'LOOUT':
			return Object.assign(state, initialState);

		default:
			return state;

	}
}

export default login;