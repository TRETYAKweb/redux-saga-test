import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./reducers/cashReducer";
import { usersReducer } from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
