//  TODO: add import statement for login form sass file
import React, { Component } from "react";
import LoginAlert from "./LoginAlert.js";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      valid: true
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    console.log(this.state.email.length > 0 && this.state.password.length > 0);
  }

  handleChange(event) {
    this.setState({
      [event.target.type]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateForm();
  }

  render() {
    return (
      <div className="log-form container">
        <h1 className="log-form-title">Login to Your Account</h1>
        <div className="log-form-body">
          <div className="log-form-head">
           <h2>Sign in</h2>
           <p>Please enter your email and password</p>
          </div>
          <LoginAlert showError={!this.state.valid} errorMsg="you have a login error"/>
          <form onSubmit={this.handleSubmit} id="login">
            <div className="form-group">
              <input 
                type="email"
                className="form-control" 
                id="loginEmail" 
                placeholder="Email Address" 
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="loginPassword" 
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="reset-pwd">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="log-form-submit btn btn-success">Login</button>
          </form>
        </div>
      </div>
    );
  }
}