import { createStore } from "redux";
import reducers from './reducers/index';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // composeWithDevTools()
);


export default store;