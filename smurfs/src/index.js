import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import "./index.css";
import App from "./components/App";
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk,logger))
)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));
