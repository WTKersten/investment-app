import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

function StockRow({id, isin, name, closePrice, productType, handleClickRemoveRow}) {
    return (
        <tr key={id}>
            <td>{isin}</td>
            <td>{name}</td>
            <td>€ {closePrice}</td>
            <td>{productType}</td>
            <td><Button onClick={() => handleClickRemoveRow(id)} >Remove</Button></td>
        </tr>
    )
}

StockRow.propTypes = {
    id: PropTypes.string.isRequired,
    isin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    closePrice: PropTypes.string.isRequired,
    productType: PropTypes.string.isRequired,
    handleClickRemoveRow: PropTypes.func.isRequired,
};

export default StockRow;