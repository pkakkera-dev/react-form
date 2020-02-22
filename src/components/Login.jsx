import React from "react";
import Card from "./Card";
import "../css/style.scss";

class Login extends React.Component {
  state = {
    userId: "",
    password: "",
    loggedIn: false,
    buttonText: "Login"
  };

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  onSubmitHandler = event => {
    this.setState({
      userId: "",
      password: "",
      loggedIn: !this.state.loggedIn,
      buttonText: this.state.buttonText === "Login" ? "Logout" : "Login"
    });
    event.preventDefault();
  };

  render() {
    return (
      <section className="form-section">
        {this.state.loggedIn && (
          <strong
            style={{
              textAlign: "center",
              color: "green",
              paddingLeft: "100px"
            }}
          >
            Login Success! Welcome User
          </strong>
        )}
        <Card>
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-control">
              <label>User Id:</label>
              <input
                type="text"
                name="userId"
                value={this.state.userID}
                onChange={e => this.handleInput(e)}
              />
            </div>
            <div className="form-control">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleInput(e)}
              />
            </div>
            <div className="form-action-btn">
              <button type="submit"> {this.state.buttonText} </button>
            </div>
          </form>
        </Card>
        <Card>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Card>
      </section>
    );
  }
}

export default Login;
