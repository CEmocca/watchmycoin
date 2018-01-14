import React from 'react'
import propTypes from 'prop-types';

const TableBody = ({data}) => (
    <tbody>
        {data.map(({name, trades}) => 
            <tr key={name}>
                <td>{name}</td>
                {trades.map(({provider, price}) => 
                    <td key={provider}>{price}</td>
                )}
            </tr>
        )}
    </tbody>
)

TableBody.propTypes = {
    headers: propTypes.array
}

export default TableBody