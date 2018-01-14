import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory'
import reducer from '../reducers/index'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()

const middleware = routerMiddleware(history)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware, thunk),
  // other store enhancers if any
);

// const composeEnhancers = composeWithDevTools({ actionCreators });
export const store = createStore(reducer, enhancer);