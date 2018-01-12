import React, { Component } from 'react'
import thunk from 'redux-thunk'
import logo from './logo.svg'
import './App.css'
import CoinDetail from './home/CoinDetail'
import CoinTable from './home/CoinTable'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from '../reducers'
// import { App, Home, Foo, Bar } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducer,
  applyMiddleware(thunk, middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
        <div>
              <Route exact path="/" component={CoinDetail} />
              <Route path="/table" component={CoinTable} />
              <Route path="/detail" component={CoinDetail} />
        </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
