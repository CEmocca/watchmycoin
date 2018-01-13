import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CoinDetail from './home/CoinDetail'
import CoinTable from './home/CoinTable'

// import { App, Home, Foo, Bar } from './components'

class App extends Component {

  render() {
    return (
      <div>
        <CoinDetail />
      </div>
    );
  }
}

export default App;
