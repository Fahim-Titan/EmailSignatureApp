import React, { Component } from "react";
import SignatureForm from "../components/SignatureForm";
import Preview from "../components/Preview";


class Signature extends Component {
  state = {
      signatureInfo: {
        Name: "",
        Designation: "",
        Company: "",
        Contact: ""
      }
  };

  handleChange = (data) => {
      this.setState({signatureInfo: data})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3 pt-3">
          <SignatureForm onDataUpdate={this.handleChange}/>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3 pt-3">
          <Preview value={this.state.signatureInfo}/>
        </div>
      </div>
    );
  }
}

export default Signature;
