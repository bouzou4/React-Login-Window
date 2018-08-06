//  TODO: add import statement for login form sass file
import React, { Component } from "react";
import LoginAlert from "./LoginAlert.js";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {
        email: true,
        password: true,
        messages: []
      }
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    let errors = [];
    let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    let emailValid, passValid = false;

    if(emailRegex.test(String(this.state.email).toLowerCase()))
      emailValid = true;
    else {
      emailValid = false;
      errors.push("Please enter a valid Email");
    }

    if(passRegex.test(String(this.state.password)))
      passValid = true;
    else {
      passValid = false;
      errors.push("Password must contain at least 8 characters and a combination of lowercase and uppercase letters, at least 1 number, and a special character");
    }

    this.setState({
      errors: {
        email: emailValid,
        password: passValid,
        messages: errors
      }
    });

    if(emailValid && passValid)
      return true;
    else
      return false;
  }

  handleChange(event) {
    this.setState({
      [event.target.type]: event.target.value
    }, this.validateForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.validateForm()) {
      // replace with form post request
      alert("Login Succesful");
    }
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
          {!(this.state.errors.email && this.state.errors.password) && 
            <LoginAlert errorMsg={this.state.errors.messages} />
          }
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