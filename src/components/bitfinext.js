// import React, { Component } from 'react'

// import { initSocket } from '../actions/action'
// import { BITFINEX_SOCKET_URL } from '../constants/Url'
// import { TRADES_CHANNEL, TICKER_CHANNEL, BTCUSD_PAIR } from '../constants/BitfinexTypes'


// class Bitfinex extends Component {
//     constructor(props) {
//         super(props)
//         const { dispatch } = this.props
//         //    dispatch(loadInitialData())
//         socket = io.connect(BITFINEX_SOCKET_URL)
//         console.log(socket)
//         dispatch(initSocket(socket))

//         socket.on('message', (res) => {
//             console.log(res)
//         })

//         let request = JSON.stringify({
//             event: 'subscribe',
//             channel: TICKER_CHANNEL,
//             symbol: `t${BTCUSD_PAIR}`
//         })

//         socket.on('open',() => socket.send(request))
//     }

//     componentWillUnmount() {
//         socket.disconnect()
//         alert("Disconnecting Socket as component will unmount")
//     }

    
// }

// export default Bitfinex