import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'reactstrap';
import {TableHead, TableHeader, TableX} from './styled';

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