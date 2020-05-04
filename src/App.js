import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import Player from "./pages/Player";
import Login from "./pages/Login";

const Router = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Player} />
			<Route path="/login" exact component={Login} />
		</BrowserRouter>
	);
};

const Redux = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<span>Stuck in redux</span>} persistor={persistStore(store)}>
				<Router />
			</PersistGate>
		</Provider>
	);
};

export default Redux;
