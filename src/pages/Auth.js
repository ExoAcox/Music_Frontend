import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const url = process.env.BASE_URL + "/api/auth/google";

const Auth = () => {
	const params = useParams();

	const google = () => {
		const token = window.location.href.split(/access_token=(.*)&token_type/)[1];
		history.replaceState({}, "", "redirect");
		Axios.post(url, { token }).then((resolve) => console.log(resolve.data));
	};

	useEffect(() => {
		switch (params.provider) {
			case "google":
				google();
				break;
			case "facebook":
				google();
				break;
			case "twitter":
				google();
				break;
		}
	}, []);

	return <div>Redirecting please wait...</div>;
};

export default Auth;
