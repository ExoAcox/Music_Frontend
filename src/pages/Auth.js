import React, { useEffect } from "react";
import Axios from "axios";

const url = "http://127.0.0.1:9999/api/auth/google";

const Auth = () => {
	useEffect(() => {
		const params = window.location.href.split(/access_token=(.*)&token_type/)[1];
		history.replaceState({}, "", "redirect");
		Axios.post(url, { token: params }).then((resolve) => console.log(resolve.data));
	}, []);

	return <div>Redirecting please wait...</div>;
};

export default Auth;
