import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {createStructuredSelector} from 'reselect';
import {getNews} from '../actions';
import {connect} from 'react-redux';
import {selectGenericLoadingCalls, selectNews} from '../selectors';
import {Loader} from '../../components/styledComponents';
import {bindActionCreators} from 'redux';
import News from '../../components/News/News';

function NewsContainer(props) {
    const{news, genericLoadingCalls} = props;
    useEffect(() => {
            if(isEmpty(news)) {
                props.getNews();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    if (isEmpty(news) && genericLoadingCalls !== 0) return <Loader>Retreiving the latest news... ⏰</Loader>;

    return (
        <News news={news}/>
    );
}

NewsContainer.propTypes = {
    news: PropTypes.array,
    genericLoadingCalls: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
    news: selectNews,
    genericLoadingCalls: selectGenericLoadingCalls
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getNews,
}, dispatch);

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(NewsContainer);