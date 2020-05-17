import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/player" exact component={Player} />
            <Route path="/login" exact component={Login} />
            <Route path="/auth/:provider" exact component={Auth} />
            {/* <Route path="/auth/facebook" exact component={Auth} /> */}
        </BrowserRouter>
    );
};

const Redux = () => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<span>Stuck in redux</span>}
                persistor={persistStore(store)}
            >
                <Router />
            </PersistGate>
        </Provider>
    );
};

export default Redux;
