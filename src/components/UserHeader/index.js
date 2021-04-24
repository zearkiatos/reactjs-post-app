import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;
    console.log(this.props)
    if (user) return <div className="header">{user.name}</div>;

    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
