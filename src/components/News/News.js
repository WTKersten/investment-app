import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import NewsCard from './NewsCard';

function News({news}) {
    return(
        <>
            <h2>News</h2>
            <Row>
                {news.map(newsItem=> (
                    <Col key={newsItem.id} s="12" md="6" lg="3">
                        <NewsCard content={newsItem.content} date={newsItem.date} title={newsItem.title}/>
                    </Col>
                ))}
            </Row>
        </>
    );
}

News.propTypes = {
    news: PropTypes.array.isRequired,
};

export default News;