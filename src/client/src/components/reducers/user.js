const initialState = [
	{
		hk:'hgfj'
	}
];

function user (state = initialState, { type, payload }) {
  switch (type) {
		case 'LOGIN':
			return [
			{
				hk:'hgfj'
			},
			];

		case 'LOOUT':
			return Object.assign(state, initialState);

		default:
			return state;

	}
}

export default user;