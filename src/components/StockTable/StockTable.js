import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {TableHead, TableHeader, TableX} from './styled';
import StockInputRow from './StockInputRow';
import StockRow from './StockRow';
import {ButtonX} from '../styledComponents';

const getEmptyStockObject = () => ({isin: '', name: '', closePrice: '', productType: '', id: uuid()});

function StockTable({stocks}) {

    const [stockArr, setStockArr] = useState(stocks);
    const [newStock, setNewStock] = useState(getEmptyStockObject());

    const handleClickAdd = useCallback(() => {
        setStockArr(stockArr => [...stockArr, newStock]);
        setNewStock(getEmptyStockObject());
    }, [newStock]);

    const handleClickRemoveRow = useCallback(id => {
        const stockArrCopy = [...stockArr];
        const stockIndexInArray = stockArr.findIndex(stock => stock.id === id);
        stockArrCopy.splice(stockIndexInArray, 1);
        setStockArr(stockArrCopy)
    }, [stockArr]);

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
                        <TableHeader/>
                    </tr>
                </TableHead>
                <tbody>
                    {stockArr.map((stock) => (
                        <StockRow
                            id={stock.id}
                            isin={stock.isin}
                            name={stock.name}
                            closePrice={stock.closePrice}
                            productType={stock.productType}
                            handleClickRemoveRow={handleClickRemoveRow}/>
                    ))}
                    <StockInputRow {...newStock} handleChange={handleChange}/>
                </tbody>
            </TableX>
            <ButtonX primary onClick={handleClickAdd}>Add</ButtonX>
        </>
    )
}

StockTable.propTypes = {
    stocks: PropTypes.array.isRequired,
};

export default StockTable;