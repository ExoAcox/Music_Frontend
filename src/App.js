import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import Home from "./pages/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
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
