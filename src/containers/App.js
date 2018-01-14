import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer } from 'react-router-redux'
import { store, history } from '../store/coinDataStore'
import logo from './logo.svg'
import './App.css'
import CoinDetail from './home/coinDetail'
import CoinTable from './home/coinTable'

// import { App, Home, Foo, Bar } from './components'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={CoinTable} />
                <Route exact path="/all" component={CoinTable} />
                <Route path="/watch" component={CoinDetail} />
            </div>
        </ConnectedRouter>
    </Provider>
    );
  }
}

export default App;
