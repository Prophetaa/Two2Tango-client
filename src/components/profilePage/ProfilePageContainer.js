import React, { Component } from "react";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import { getOneProfile } from "../../actions/results";

class ProfilePageContainer extends Component {
    componentDidMount() {
    this.props.getOneProfile()
  }
  render() {
    return (
      <div>
        <ProfilePage profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    login: state.login,
    currentUser: state.currentUser,
    profile: state.profile
  };
};
export default connect(
  mapStateToProps,
  { getOneProfile }
)(ProfilePageContainer);
