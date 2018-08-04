import React, { Component } from "react";

export default function LoginAlert(props) {
  if(props.showError) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {props.errorMsg}
      </div>
    );
  }
  return null;
}