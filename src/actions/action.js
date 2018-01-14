

// export const addSymbol = (symbol) => ({
//     type: 'ADD_SYMBOL',
//     symbol: symbol
// })

// export const removeSymbol = (symbol) => ({
//     type: 'REMOVE_SYMBOL',
//     symbol: symbol
// })

// export const initialValue = (res) => ({
//     type: 'INITIAL_VALUE',
//     res: res
// })

export const addSocket = (socket, symbol) => ({
    type: 'ADD_SOCKET',
    socket: socket,
    symbol: symbol
})

export const removeSocket = (socket) => ({
    type: 'REMOVE_SOCKET',
    socket: socket
})

/***************************************************************************************** */
/* Async Action using - Sockets													   */
/***************************************************************************************** */

export const initSocket = (msg, socketUrl) => {
    return (dispatch) => {
        let socket = new WebSocket(socketUrl)

        // socket.onopen = () => socket.send(msg)
        console.log(socket)
        dispatch(addSocket(socket, msg.symbol))
    }
}

// export const addNewSymbol = (socket, symbol) => {
//     return (dispatch) => {
//         socket.emit('ADD_SYMBOL', symbol)
//     }
// }

// export const addNewSocket = (socket) => {
//     return (dispatch) => {
//         socket.emit('ADD_SOCKET', socket)
//     }
// }