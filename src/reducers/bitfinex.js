import { XRPUSD_PAIR, ETHUSD_PAIR, BTCUSD_PAIR } from '../constants/BitfinexTypes'

const initialState = [
    {
        symbols: [XRPUSD_PAIR, ETHUSD_PAIR, BTCUSD_PAIR]
    }
]

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SYMBOL':
            return {
                ...state,
                symbols: state.symbols.push(action.symbol)
            }
        case 'REMOVE_SYMBOL':
            return {
                ...state,
                symbols: state.symbols.filter(s => s !== action.symbol)
            }
        default:
            return state
    }
}

export default reducer;