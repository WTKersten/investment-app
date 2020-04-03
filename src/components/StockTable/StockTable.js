import React, {useCallback, useEffect, useState} from 'react';
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
    const [stockArrLength, setStockArrLenth] = useState(stockArr.length);
    useEffect(() => {
        setStockArrLenth(stockArr.length);
        document.title = `(${stockArrLength + 1}) aandelen in uw portofolio`;
    }, [stockArr.length, stockArrLength]);

    useEffect(() => {
        return () => {
            document.title = 'Investment App';
        };
    }, []);

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
            <TableX responsive>
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
                        <React.Fragment key={stock.id}>
                            <StockRow
                                id={stock.id}
                                isin={stock.isin}
                                name={stock.name}
                                closePrice={stock.closePrice}
                                productType={stock.productType}
                                handleClickRemoveRow={handleClickRemoveRow}/>
                        </React.Fragment>
                    ))}
                    <StockInputRow {...newStock} handleChange={handleChange}/>
                </tbody>
            </TableX>
            <ButtonX primary="true" onClick={handleClickAdd}>Add</ButtonX>
        </>
    )
}

StockTable.propTypes = {
    stocks: PropTypes.array.isRequired,
};

export default StockTable;