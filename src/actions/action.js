

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

export const addSocket = (socket, msg) => ({
    type: 'ADD_SOCKET',
    socket: socket,
    msg: msg
})

export const removeSocket = (socket) => ({
    type: 'REMOVE_SOCKET',
    socket: socket
})

/***************************************************************************************** */
/* Async Action using - Sockets													   */
/***************************************************************************************** */

export const initSocket = (msg, socketUrl, callback) => {
    console.log(msg)
    return (dispatch) => {
        let socket = new WebSocket(socketUrl)
        socket.onmessage = (res) => callback(res)
        socket.onopen = () => socket.send(JSON.stringify(msg))
        dispatch(addSocket(socket, msg))
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