/**
 * Created by u on 2017/5/20.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import Carousel from "./components/Carousel.jsx";
import reducer from "./reducers";

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Carousel/>
    </Provider>,
    document.getElementById('root')
)



