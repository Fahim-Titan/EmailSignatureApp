import React, { Component } from "react";
import Input from "../utils/input-elements/Input";
import data from './signature-templates/DesignList';


class SignatureForm extends Component {
  state = {
    data: {
      Name: "",
      Designation: "",
      Company: "",
      Contact: "",
      SelectTemplate: "default"
    }
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state.data);
  // };

  handleChange = e => {
    let info = { ...this.state.data };
    info[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: info });
    this.props.onDataUpdate(info);
  };

  renderOption = () => {
    let opt=[];
    data.forEach(element => {
      opt.push(<option key={element.name} value={element.name}>{element.title}</option>);
    })
    return opt;
  };

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
            onChange={this.handleChange}
            placeholder="eg: Jhon Doe"
          />
          <Input
            label="Designation"
            type="text"
            id="designation"
            name="Designation"
            value={this.state.Designation}
            onChange={this.handleChange}
            placeholder="eg: Sr. Programmer"
          />
          <Input
            label="Company"
            type="text"
            id="company"
            name="Company"
            value={this.state.Company}
            onChange={this.handleChange}
            placeholder="eg: Star Trek Industries"
          />
          <Input
            label="Conact"
            type="text"
            id="contact"
            name="Contact"
            value={this.state.Contact}
            onChange={this.handleChange}
            placeholder="eg: +8801XXXXXXXXX"
          />
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
          {/* <select
            name="SelectTemplate"
            value={this.state.SelectTemplate}
            onChange={this.handleChange}
          >
            <option value="default">default design</option>
            <option value="first">first design</option>
            <option value="second">second Design</option>
          </select> */}

          <select
            name="SelectTemplate"
            value={this.state.SelectTemplate}
            onChange={this.handleChange}
          >
          {this.renderOption()}

          </select>
        </form>
      </div>
    );
  }
}

export default SignatureForm;
