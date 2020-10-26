import {createStore, applyMiddleware} from "redux";
import kanban from "./reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    kanban,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;