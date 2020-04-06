import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions';
import { selectGenericLoadingCalls, selectNews } from '../selectors';
import Loader from '../../components/Loader/Loader';
import News from '../../components/News/News';

function NewsContainer(props) {
  const { news, genericLoadingCalls } = props;
  useEffect(() => {
    if (isEmpty(news)) {
      props.getNews();
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  if (isEmpty(news) && genericLoadingCalls !== 0) {
    return (
      <Loader>
        Retrieving the latest news...
      </Loader>
    );
  }

  return (
    <News news={news} />
  );
}

NewsContainer.propTypes = {
  news: PropTypes.arrayOf(Object),
  genericLoadingCalls: PropTypes.number,
  getNews: PropTypes.func.isRequired,
};

NewsContainer.defaultProps = {
  news: [],
  genericLoadingCalls: 1,
};

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  genericLoadingCalls: selectGenericLoadingCalls,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNews,
}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(NewsContainer);
