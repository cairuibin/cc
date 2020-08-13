
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import EG from './OBS/eg'
import HOME from './OBS/home'
const reducer = combineReducers({ EG,HOME })

const store = createStore(reducer, applyMiddleware(thunk,logger))
export default store