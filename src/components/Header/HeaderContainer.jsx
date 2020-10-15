import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props}/>
    );
  }
  
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    UserLogin: state.auth.Login,
  };
};
export default connect(mapStateToProps, null)(HeaderContainer);
