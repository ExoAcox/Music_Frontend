import Axios from "axios";

export const setUser = (username) => {
	return {
		type: "SET_USER",
		payload: Axios.get("http://100.24.32.116:8888/api/user/" + username),
	};
};
export const test = (test) => {
	return {
		type: "TEST",
		payload: test,
	};
};
