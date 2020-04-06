import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStocks } from '../actions';
import { selectGenericLoadingCalls, selectStocks } from '../selectors';
import StockTable from '../../components/StockTable/StockTable';
import Loader from '../../components/Loader/Loader';

function StocksContainer(props) {
  const { stocks, genericLoadingCalls } = props;
  useEffect(() => {
    if (isEmpty(stocks)) {
      props.getStocks();
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  if (isEmpty(stocks) && genericLoadingCalls !== 0) {
    return <Loader>Retrieving your stocks...</Loader>;
  }

  return (
    <>
      <StockTable stocks={stocks} />
    </>
  );
}

StocksContainer.propTypes = {
  stocks: PropTypes.arrayOf(Object),
  genericLoadingCalls: PropTypes.number,
  getStocks: PropTypes.func.isRequired,
};

StocksContainer.defaultProps = {
  stocks: [],
  genericLoadingCalls: 0,
};

const mapStateToProps = createStructuredSelector({
  stocks: selectStocks,
  genericLoadingCalls: selectGenericLoadingCalls,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getStocks,
}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(StocksContainer);
