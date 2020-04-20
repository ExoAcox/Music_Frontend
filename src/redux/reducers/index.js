import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";
import album from "./album";

const albumPersistConfig = {
	key: "album",
	storage: storage,
	keyPrefix: "",
	blacklist: ["ready"],
};

const reducers = combineReducers({
	user: user,
	album: persistReducer(albumPersistConfig, album),
});

export default reducers;
