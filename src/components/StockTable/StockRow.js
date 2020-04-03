import React from 'react';

function StockRow({id, isin, name, closePrice, productType}) {

    return (
        <tr key={id}>
            <td>{isin}</td>
            <td>{name}</td>
            <td>€ {closePrice}</td>
            <td>{productType}</td>
        </tr>
    )
}

export default StockRow;