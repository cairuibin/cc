
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import EG from './OBS/eg'
// import HOME from './OBS/home'

let moduleFile = require.context('./OBS', true, /\index.js$/);
let res = moduleFile.keys().reduce((prev, item) => {
    let son = moduleFile(item).default;
    let name = item.split('/')[1].toLocaleUpperCase();
    prev = Object.assign({}, prev, { [name]: son })
    return prev
}, {});

const reducer = combineReducers({ ...res })
// const reducer = combineReducers({ EG,HOME })

const store = createStore(reducer, applyMiddleware(thunk, logger))
export default store