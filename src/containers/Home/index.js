import React, {useEffect} from 'react';
import {createStructuredSelector} from "reselect";
import {getProfile} from "../actions";
import {connect} from "react-redux";
import {selectProfile} from "../selectors";

function Home(props) {
    const { profile } = props;

    useEffect(() => {
        props.getProfile();
    }, [props]);

  return (
    <>
      <h2>Welcome {profile}</h2>
    </>
  );
}


const mapStateToProps = createStructuredSelector({
    profile: selectProfile,
});

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(Home);