import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-materialize'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/action'
import { BITFINEX_SOCKET_URL } from '../../constants/url'
import { TRADES_CHANNEL, TICKER_CHANNEL, BTCUSD_PAIR } from '../../constants/bitfinexTypes'

const mapStateToProps = (state) => {
  return {
    sockets: state.sockets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
    addNewSocket: (msg, url) => dispatch(Actions.initSocket(msg, url))
  };
};

class CoinDetail extends Component {

  constructor(props) {
    super(props)

    // socket.onmessage = (res) => {
    //   console.log("HERE 1")
    //   console.log(res.data)
    // }
    // socket2.onmessage = (res) => {
    //   console.log("HERE 2")
    //   console.log(res.data)
    // }

    this.addSymbol = this.addSymbol.bind(this)
  }

  addSymbol(symbol) {
    let msg = {
        event: 'subscribe',
        channel: TICKER_CHANNEL,
        symbol: `t${symbol}`
    }

    this.props.addNewSocket(msg, BITFINEX_SOCKET_URL)
  }

  componentWillUnmount() {
    let sockets = this.state.sockets
    sockets.foreach(s => s.disconnect())
  }

  render() {
    const {sockets} = this.props
    console.log(sockets)
    return (
      <div>
      
        <Button waves='light' onClick={() => this.addSymbol('XRPUSD')}>Add XRP</Button>
        <Button waves='light' onClick={() => this.addSymbol('OMGUSD')}>Add OMG</Button>
        {/* <Table> */}
        {/* https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/todomvc */}
        {/* </Table> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetail)