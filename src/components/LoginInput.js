//  TODO: add import statement for login form sass file
import React, { Component } from "react";

export default class LoginInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateInput() {
    console.log(this.state.email.length > 0 && this.state.password.length > 0);
  }

  handleChange(event) {
    this.setState({
      [event.target.type]: event.target.value
    });
  }

  render() {
    return (
      <div className="form-group">
        <input 
          type={this.props.field}
          className="form-control" 
          id={"login-" + this.props.field} 
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}