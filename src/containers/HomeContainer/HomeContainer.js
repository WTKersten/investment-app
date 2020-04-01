import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {createStructuredSelector} from "reselect";
import {getProfile} from "../actions";
import {connect} from "react-redux";
import {selectGenericLoadingCalls, selectProfileName} from "../selectors";
import {Loader} from '../../components/styledComponents';

function HomeContainer(props) {
    const { profileName, genericLoadingCalls } = props;

    useEffect(() => {
        if(isEmpty(profileName)) props.getProfile();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    if (isEmpty(profileName) && genericLoadingCalls !== 0) return <Loader>Loading... ⏰</Loader>;

    return (
        <>
            <h2>Welcome {profileName}</h2>
        </>
    );
}

HomeContainer.propTypes = {
    profile: PropTypes.string,
    genericLoadingCalls: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
    profileName: selectProfileName,
    genericLoadingCalls: selectGenericLoadingCalls,
});

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(HomeContainer);