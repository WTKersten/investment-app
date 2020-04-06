import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { TableHead, TableHeader, TableX } from './styled';
import StockInputRow from './StockInputRow';
import StockRow from './StockRow';
import { ButtonX } from '../styledComponents';

const getEmptyStockObject = () => ({
  isin: '', name: '', closePrice: '', productType: '', id: uuid(),
});

function StockTable({ stocks }) {
  const [stockArr, setStockArr] = useState(stocks);
  const [newStock, setNewStock] = useState(getEmptyStockObject());
  const [stockArrLength, setStockArrLenth] = useState(stockArr.length);
  useEffect(() => {
    setStockArrLenth(stockArr.length);
    // eslint-disable-next-line no-undef
    document.title = `(${stockArrLength + 1}) aandelen in uw portofolio`;
  }, [stockArr.length, stockArrLength]);

  useEffect(() => () => {
    // eslint-disable-next-line no-undef
    document.title = 'Investment App';
  }, []);

  const handleClickAdd = useCallback(() => {
    setStockArr(() => [...stockArr, newStock]);
    setNewStock(getEmptyStockObject());
  }, [newStock, stockArr]);

  const handleClickRemoveRow = useCallback((id) => {
    const stockArrCopy = [...stockArr];
    const stockIndexInArray = stockArr.findIndex((stock) => stock.id === id);
    stockArrCopy.splice(stockIndexInArray, 1);
    setStockArr(stockArrCopy);
  }, [stockArr]);

  const handleChange = useCallback(({ target }) => {
    setNewStock({ ...newStock, [target.name]: target.value });
  }, [newStock]);

  return (
    <>
      <h2>Stocks</h2>
      <TableX responsive>
        <TableHead>
          <tr>
            <TableHeader>ISIN</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Product type</TableHeader>
            <TableHeader />
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
                handleClickRemoveRow={handleClickRemoveRow}
              />
            </React.Fragment>
          ))}

          <StockInputRow
            isin={newStock.isin}
            name={newStock.name}
            closePrice={newStock.closePrice}
            productType={newStock.productType}
            id={newStock.id}
            handleChange={handleChange}
          />
        </tbody>
      </TableX>
      <ButtonX primary="true" onClick={handleClickAdd}>Add</ButtonX>
    </>
  );
}

StockTable.propTypes = {
  stocks: PropTypes.arrayOf(Object).isRequired,
};

export default StockTable;
