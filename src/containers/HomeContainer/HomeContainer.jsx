import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../actions';
import { selectGenericLoadingCalls, selectProfileName } from '../selectors';
import Loader from '../../components/Loader/Loader';

function HomeContainer(props) {
  const { profileName, genericLoadingCalls } = props;
  useEffect(() => {
    if (isEmpty(profileName)) props.getProfile();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  if (isEmpty(profileName) && genericLoadingCalls !== 0) return <Loader>Loading...</Loader>;

  return (
    <>
      <h2>
        {`Welcome ${profileName}`}
      </h2>
    </>
  );
}

HomeContainer.propTypes = {
  profileName: PropTypes.string,
  genericLoadingCalls: PropTypes.number,
  getProfile: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = {
  profileName: '',
  genericLoadingCalls: 1,
};


const mapStateToProps = createStructuredSelector({
  profileName: selectProfileName,
  genericLoadingCalls: selectGenericLoadingCalls,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProfile,
}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(HomeContainer);
