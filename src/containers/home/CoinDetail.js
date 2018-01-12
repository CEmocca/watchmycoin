import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-materialize'
import io from 'socket.io-client';

import { initSocket } from '../../actions/action'
import { BITFINEX_SOCKET_URL } from '../../constants/Url'
import { TRADES_CHANNEL, TICKER_CHANNEL, BTCUSD_PAIR } from '../../constants/BitfinexTypes'

// @connect(packagesSelector)
let socket
const mapStateToProps = (state = {}) => {
	// console.dir(state)
    return {...state}
}

class CoinDetail extends Component {

  constructor(props) {
    super(props)
    const { dispatch } = this.props
    //    dispatch(loadInitialData())
    socket = io.connect(BITFINEX_SOCKET_URL)
    console.log(socket)
    dispatch(initSocket(socket))

    socket.on('message', (res) => {
      console.log(res)
    })

    let request = JSON.stringify({
      event: 'subscribe',
      channel: TICKER_CHANNEL,
      symbol: `t${BTCUSD_PAIR}`
    })

    socket.on('open', () => socket.send(request))
  }

  componentWillUnmount() {
    socket.disconnect()
    alert("Disconnecting Socket as component will unmount")
  }

  render() {
    const {dispatch} = this.props
    return (
      <div>
        CoinDetail
            {/* <Table> */}
        {/* https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/todomvc */}
        {/* </Table> */}
      </div>
    )
  }
}

export default connect(mapStateToProps)(CoinDetail)