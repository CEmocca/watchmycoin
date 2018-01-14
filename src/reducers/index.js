import { combineReducers } from 'redux'
import sockets from './socketReducer'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
    sockets,
    routerReducer
})

export default rootReducer