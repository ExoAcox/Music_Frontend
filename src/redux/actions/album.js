import Axios from "axios";

export const setList = (max) => {
	return {
		type: "SET_LIST",
		payload: Axios.post(process.env.BASE_URL + "/api/album", { max: max }),
	};
};
