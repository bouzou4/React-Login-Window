import React, { Component } from "react";

export default function LoginAlert(props) {
  if(props.showError) {
    return (
      <div className="log-form-alert alert alert-danger" role="alert">
        <strong>Oh snap!</strong>
        <ul>
        {props.errorMsg.map(function(msg, ind) {
          return (
            <li key={ind}>{msg}</li>
          );
        })}
        </ul>
      </div>
      );
  }
  return null;
}