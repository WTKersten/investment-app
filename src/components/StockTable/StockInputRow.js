import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';


function StockInputRow({isin, name, closePrice, productType, handleChange}) {
    return(
        <tr>
            <td><Input type="text" placeholder="ISIN" name="isin" value={isin} onChange={handleChange} /></td>
            <td><Input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/></td>
            <td><Input type="text" placeholder="Price" name="closePrice" value={closePrice} onChange={handleChange}/></td>
            <td><Input type="text" placeholder="Product type" name="productType" value={productType} onChange={handleChange}/></td>
        </tr>
    );
}

StockInputRow.propTypes = {
    isin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    closePrice: PropTypes.string.isRequired,
    productType: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default StockInputRow;