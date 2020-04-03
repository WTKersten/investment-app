import React from 'react';
import PropTypes from 'prop-types';
import {ButtonX} from '../styledComponents';
import {TableCellAmount} from './styled';

function StockRow({id, isin, name, closePrice, productType, handleClickRemoveRow}) {
    return (
        <tr>
            <td>{isin}</td>
            <td>{name}</td>
            <TableCellAmount>{`€ ${closePrice}`}</TableCellAmount>
            <td>{productType}</td>
            <td><ButtonX onClick={() => handleClickRemoveRow(id)} >Remove</ButtonX></td>
        </tr>
    )
}

StockRow.propTypes = {
    id: PropTypes.string.isRequired,
    isin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    closePrice: PropTypes.number.isRequired,
    productType: PropTypes.string.isRequired,
    handleClickRemoveRow: PropTypes.func.isRequired,
};

export default StockRow;