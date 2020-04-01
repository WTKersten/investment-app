import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {createStructuredSelector} from "reselect";
import {getStocks} from "../actions";
import {connect} from "react-redux";
import {selectStocks} from "../selectors";
import StockTable from "../../components/StockTable/StockTable";

function StocksContainer(props) {
    const { stocks } = props;

    useEffect(() => {
            if(isEmpty(stocks)) {
                props.getStocks();
            }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <>
      <h2>Stocks</h2>
        <StockTable stocks={stocks}/>
    </>
  );
}

StocksContainer.propTypes = {
    stocks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    stocks: selectStocks,
});

const mapDispatchToProps = dispatch => ({
    getStocks: () => dispatch(getStocks()),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(StocksContainer);