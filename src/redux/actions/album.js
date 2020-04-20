import Axios from "axios";

export const setList = (max) => {
	return {
		type: "SET_LIST",
		payload: Axios.post("http://127.0.0.1:9999/api/album", { max: max }),
	};
};
