import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

// import * as reducers from './reducers/index'
import sockets from './reducers/bitfinex'
import * as actionCreators from './actions/action'
import './index.css';
import App from './containers/App';
import CoinDetail from './containers/home/CoinDetail'
import CoinTable from './containers/home/CoinTable'
import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
    // ...reducers,
    sockets,
    routing: routerReducer,
})

const history = createHistory()
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
const store = createStore(reducer, enhancer);

console.log(store)

ReactDOM.render(
    <Provider store={store}>
        {/* <CoinDetail /> */}
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={CoinDetail} />
                <Route exact path="/test1" component={CoinTable} />
                <Route path="/test2" component={CoinDetail} />
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
