import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding-left: 8px;
        border: solid 1px #E0E2DB;
    }
`;

const TableHead = styled.thead`
    background-color: #BEB7A4;
`;

const TableHeader = styled.th`
    text-align: left;
    padding-top: 16px;
    padding-bottom: 12px;
`;


function StockTable({stocks}) {
    return(
        <Table>
            <TableHead>
                <tr>
                    <TableHeader>ISIN</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>Product type</TableHeader>


                </tr>
            </TableHead>
            <tbody>
                {stocks.map((stock, i) => (
                    <tr key={stock.id}>
                        <td>{stock.isin}</td>
                        <td>{stock.name}</td>
                        <td>€ {stock.closePrice}</td>
                        <td>{stock.productType}</td>

                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

StockTable.propTypes = {
    stocks: PropTypes.array.isRequired,
};

export default StockTable;