import React from "react";

export default class loginout extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
    this.clickhandeler = this.clickhandeler.bind(this);
  }

  clickhandeler = () => {
    this.setState((prevState) => {
      
      return { isLogin:!prevState.isLogin};
    });
  };

  render() {
    return (
      <button onClick={this.clickhandeler}>
        {this.state.isLogin ? "logout" : "login"}
      </button>
    );
  }
}
