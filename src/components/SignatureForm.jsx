import React, { Component } from "react";
import Input from "../utils/input-elements/Input";

class SignatureForm extends Component {
  state = {
      data: {
          Name: "",
          Designation: "",
          Company: "",
          Contact: ""
      }
  };

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
}

handleChange = (e) => {
    let info = {...this.state.data};
    info[e.currentTarget.name] = e.currentTarget.value;
    this.setState({data: info});
    this.props.onDataUpdate(info);
  }

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Enter Your Name"
            type="text"
            id="name"
            name="Name"
            value={this.state.Name}
            onChange = {this.handleChange}
            placeholder="eg: Jhon Doe"
          />
          <Input
            label="Designation"
            type="text"
            id="designation"
            name="Designation"
            value={this.state.Designation}
            onChange = {this.handleChange}
            placeholder="eg: Sr. Programmer"
          />
          <Input
            label="Company"
            type="text"
            id="company"
            name="Company"
            value={this.state.Company}
            onChange = {this.handleChange}
            placeholder="eg: Star Trek Industries"
          />
          <Input
            label="Conact"
            type="text"
            id="contact"
            name="Contact"
            value={this.state.Contact}
            onChange = {this.handleChange}
            placeholder="eg: +8801XXXXXXXXX"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignatureForm;
