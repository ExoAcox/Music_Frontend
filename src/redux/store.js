import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import reducers from "./reducers/index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const enhancers = applyMiddleware(promise);

// const store = createStore(reducers, enhancers);

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["album"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, enhancers);

export default store;
