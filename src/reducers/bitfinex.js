import { XRPUSD_PAIR, ETHUSD_PAIR, BTCUSD_PAIR } from '../constants/BitfinexTypes'
import _ from 'lodash'

const initialSocketState = []

export default (state = initialSocketState, action) => {
    switch (action.type) {
        case 'ADD_SOCKET':
            console.log(action)
            console.log(state.sockets)
            // let newSockets = 
            return [
                ...state,
                {socket: action.socket, symbol: action.symbol}
            ]
        case 'REMOVE_SOCKET':
            return _.without(state.sockets, action.socket)
        default:
            return state
    }
}