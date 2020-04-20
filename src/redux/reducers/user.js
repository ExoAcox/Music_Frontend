const initialValue = {
	user: {},
	ready: false,
	test: "Failed",
};

const user = (state = initialValue, action) => {
	switch (action.type) {
		case "SET_USER_PENDING":
			return state;
		case "SET_USER_REJECTED":
			return {
				...state,
				ready: true,
			};
		case "SET_USER_FULFILLED":
			return {
				...state,
				ready: true,
				user: action.payload.data[0],
			};
		case "TEST":
			return {
				...state,
				test: action.payload,
			};
		default:
			return state;
	}
};

export default user;
