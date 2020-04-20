const initialValue = {
	list: [],
	ready: false,
	time: false,
};

const album = (state = initialValue, action) => {
	switch (action.type) {
		case "SET_LIST_PENDING":
			return state;
		case "SET_LIST_REJECTED":
			return {
				...state,
				ready: true,
			};
		case "SET_LIST_FULFILLED":
			return {
				...state,
				ready: true,
				list: action.payload.data,
				time: Date.now(),
			};
		default:
			return state;
	}
};

export default album;
