import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {createStructuredSelector} from "reselect";
import {getProfile} from "../actions";
import {connect} from "react-redux";
import {selectProfileName} from "../selectors";

function HomeContainer(props) {
    const { profileName } = props;

    useEffect(() => {
        if(isEmpty(profileName)) props.getProfile();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <>
      <h2>Welcome {profileName}</h2>
    </>
  );
}

HomeContainer.propTypes = {
    profile: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
    profileName: selectProfileName,
});

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(HomeContainer);