import React from "react";
import * as queryString from "query-string";

const googleParams = queryString.stringify({
	client_id: process.env.GOOGLE_ID,
	redirect_uri: "https://127.0.0.1:8080/auth/google",
	scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"].join(" "), // space separated string
	response_type: "token",
	state: "kJw7%F8s9f8T2liq!3j1dV<67R",
	prompt: "consent",
});
const facebookParams = queryString.stringify({
	client_id: process.env.FACEBOOK_ID,
	redirect_uri: "https://localhost:8080/auth/facebook",
	scope: ["email"].join(","), // comma separated string
	response_type: "code",
	auth_type: "rerequest",
	display: "popup",
});

const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?${googleParams}`;
const facebookUrl = `https://www.facebook.com/v4.0/dialog/oauth?${facebookParams}`;

const Login = () => {
	return (
		<div>
			<a href={googleUrl}>Google</a>
			<a href={facebookUrl}>Facebook</a>
		</div>
	);
};

export default Login;
