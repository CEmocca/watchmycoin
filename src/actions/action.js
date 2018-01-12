

export const addSymbol = (symbol) => ({
    type: 'ADD_SYMBOL',
    symbol: symbol
})

export const removeSymbol = (symbol) => ({
    type: 'REMOVE_SYMBOL',
    symbol: symbol
})

export const initialValue = (res) => ({
    type: 'INITIAL_VALUE',
    res: res
})

/***************************************************************************************** */
/* Async Action using - Sockets													   */
/***************************************************************************************** */

export const initSocket = (socket, channel) => {
    return (dispatch) => {
        socket.on(channel, (res) => {
            console.log(res)
            dispatch(initialValue(res))
        })
    }
}