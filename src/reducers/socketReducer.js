import { XRPUSD_PAIR, ETHUSD_PAIR, BTCUSD_PAIR } from '../constants/bitfinexTypes'

const initialSocketState = []

export default (state = initialSocketState, action) => {
    switch (action.type) {
        case 'ADD_SOCKET':
            return [
                ...state,
                {socket: action.socket, symbol: action.symbol}
            ]
        case 'REMOVE_SOCKET':
            // return _.without(state.sockets, action.socket) // TODO: Change this
            break
        default:
            return state
    }
}