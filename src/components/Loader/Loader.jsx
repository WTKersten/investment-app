import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper } from './styled';


function Loader({ body }) {
  return (
    <LoaderWrapper>
      {body}
      <span aria-label="clock" role="img">⏰</span>
    </LoaderWrapper>
  );
}

Loader.propTypes = {
  body: PropTypes.string,
};

Loader.defaultProps = {
  body: '',
};

export default Loader;
