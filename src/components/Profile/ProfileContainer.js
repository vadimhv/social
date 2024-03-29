import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, savePhoto, saveProfile, setProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            // if (!userId) {
            //     this.props.history.push('/login');
            // }
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authUserId: state.auth.userId
    })
}

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
