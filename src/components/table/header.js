import React from 'react'
import propTypes from 'prop-types';

const TableHeader = ({headers}) => 
    <thead>
        <tr>
            {headers.map(({ dataField, dataName }) => 
                <th data-field={dataField} key={dataField}>{dataName}</th>
            )}
        </tr>
    </thead>


TableHeader.propTypes = {
    headers: propTypes.array
}

export default TableHeader