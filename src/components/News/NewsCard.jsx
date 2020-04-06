import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, CardHeader, CardText } from 'reactstrap';
import { CardSubtitleX, CardX } from './styled';

function NewsCard({ title, date, content }) {
  return (
    <CardX>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardSubtitleX>{date}</CardSubtitleX>
        <CardText dangerouslySetInnerHTML={{ __html: content }} />
      </CardBody>
    </CardX>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsCard;
