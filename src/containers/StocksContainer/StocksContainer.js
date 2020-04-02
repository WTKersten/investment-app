import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {createStructuredSelector} from 'reselect';
import {getStocks} from '../actions';
import {connect} from 'react-redux';
import {selectGenericLoadingCalls, selectStocks} from '../selectors';
import StockTable from '../../components/StockTable/StockTable';
import {Loader} from '../../components/styledComponents';

function StocksContainer(props) {
    const{stocks, genericLoadingCalls} = props;
    useEffect(() => {
        if(isEmpty(stocks)) {
            props.getStocks();
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    if (isEmpty(stocks) && genericLoadingCalls !== 0) return <Loader>Retreiving your stocks... ⏰</Loader>;

    return (
        <>
            <StockTable stocks={stocks}/>
        </>
    );
}

StocksContainer.propTypes = {
    stocks: PropTypes.array,
    genericLoadingCalls: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
    stocks: selectStocks,
    genericLoadingCalls: selectGenericLoadingCalls
});

const mapDispatchToProps = dispatch => ({
    getStocks: () => dispatch(getStocks()),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(StocksContainer);