import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button, Table, Input} from 'reactstrap';

const TableX = styled(Table)`
    color: #ffffff;
`;

const TableHead = styled.thead`
    background-color: #BEB7A4;
`;

const TableHeader = styled.th`
    text-align: left;
    padding-top: 16px;
    padding-bottom: 12px;
`;

const emptyStockObject = {isin: '', name: '', closePrice: '', productType: ''};

function StockTable({stocks}) {

    const [stockArr, setStockArr] = useState(stocks);
    const [newStock, setNewStock] = useState(emptyStockObject);

    const handleClickAdd = useCallback(() => {
        setStockArr(stockArr => [...stockArr, newStock]);
        setNewStock(emptyStockObject);
    }, [newStock]);


    const handleChange = useCallback(({ target }) => {
        setNewStock({...newStock, [target.name]: target.value});
    }, [newStock]);


    return(
        <>
            <h2>Stocks</h2>
            <TableX>
                <TableHead>
                    <tr>
                        <TableHeader>ISIN</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Price</TableHeader>
                        <TableHeader>Product type</TableHeader>
                    </tr>
                </TableHead>
                <tbody>
                    {stockArr.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.isin}</td>
                            <td>{stock.name}</td>
                            <td>€ {stock.closePrice}</td>
                            <td>{stock.productType}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><Input type="text" name="isin" value={newStock.isin} onChange={handleChange} /></td>
                        <td><Input type="text" name="name" value={newStock.name} onChange={handleChange}/></td>
                        <td><Input type="text" name="closePrice" value={newStock.closePrice} onChange={handleChange}/></td>
                        <td><Input type="text" name="productType" value={newStock.productType} onChange={handleChange}/></td>
                    </tr>
                </tbody>
            </TableX>
            <Button primary onClick={handleClickAdd}>Add</Button>
        </>
    )
}

StockTable.propTypes = {
    stocks: PropTypes.array.isRequired,
};

export default StockTable;