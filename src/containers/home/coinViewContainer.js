import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-materialize'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/action'
import { BITFINEX_SOCKET_URL } from '../../constants/url'
import TableHeader from '../../components/table/header'
import TableBody from '../../components/table/body'
import { HEADER_FILED } from '../../constants/table'
import { TRADES_CHANNEL, TICKER_CHANNEL, REQ_SUBSCRIBE, 
  BTCUSD_PAIR, XRPUSD_PAIR } from '../../constants/bitfinexTypes'

class CoinTable extends Component {

  constructor() {
    super()

    this.addSymbol = this.addSymbol.bind(this)
    this.onReciveMessage = this.onReciveMessage.bind(this)
  }

  addSymbol(symbol) {
    let msg = {
      event: 'subscribe',
      channel: TICKER_CHANNEL,
      symbol: symbol
    }

    this.props.addNewSocket(msg, BITFINEX_SOCKET_URL, this.onReciveMessage)
  }

  componentWillMount() {
    let btcReq = {event: 'subscribe', channel: TICKER_CHANNEL, symbol: BTCUSD_PAIR}
    let xrpReq = {event: 'subscribe', channel: TICKER_CHANNEL, symbol: XRPUSD_PAIR}

    this.props.addNewSocket(btcReq, BITFINEX_SOCKET_URL, this.onReciveMessage)
    this.props.addNewSocket(xrpReq, BITFINEX_SOCKET_URL, this.onReciveMessage)
  }

  onReciveMessage(message) {
    // let request = JSON.stringify({
    //   event: 'subscribe',
    //   channel: TICKER_CHANNEL,
    //   symbol: BTCUSD_PAIR
    // })
    // let socket = new WebSocket(BITFINEX_SOCKET_URL)
    // socket.onmessage = (res) => console.log(res)
    // socket.onopen = () => socket.send(request)
    console.log(message)
  }

  // componentWillUnmount() {
  //   let sockets = this.props.sockets
  //   sockets.forEach(s => s.close())
  // }

  render() {
    const { sockets } = this.props
    console.log(sockets)
    const mockData = [
      {name: 'bitcoin', trades: [{provider:'bx', price: 10000}, {provider:'bitfinex', price: 12000}, {provider:'binance', price: 13000}]},
      {name: 'xrp', trades: [{provider:'bx', price: 10}, {provider:'bitfinex', price: 17}, {provider:'binance', price: 17}]}
    ]
    return (
      <div>
        <Table>
          <TableHeader headers={HEADER_FILED} />
          <TableBody data={mockData}/>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sockets: state.sockets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
    addNewSocket: (msg, url, callback) => dispatch(Actions.initSocket(msg, url, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable)
