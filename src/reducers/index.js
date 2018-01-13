import { combineReducers } from 'redux'
import { socketReducer } from './bitfinex'


const rootReducer = combineReducers({
    socketReducer
})

export default rootReducer