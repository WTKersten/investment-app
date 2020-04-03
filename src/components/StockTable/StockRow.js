import React from 'react';
import PropTypes from 'prop-types';
import {ButtonX} from '../styledComponents';

function StockRow({id, isin, name, closePrice, productType, handleClickRemoveRow}) {
    return (
        <tr key={id}>
            <td>{isin}</td>
            <td>{name}</td>
            <td>€ {closePrice}</td>
            <td>{productType}</td>
            <td><ButtonX onClick={() => handleClickRemoveRow(id)} >Remove</ButtonX></td>
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