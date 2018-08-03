import React, { Component } from "react";
import DefaultTemplate from "./signature-templates/DefaultTemplate";
import ImageLeftTemplate from "./signature-templates/ImageLeftTemplate";

class Preview extends Component {
  state = {

  }

  renderTemplate = props => {
    if(props.value.SelectTemplate === "default")    return <DefaultTemplate value={this.props.value} />;
    if(props.value.SelectTemplate === "first")    return <ImageLeftTemplate value={this.props.value} />;
  };


  render() {
    return (
      <div className="shadow p-4 ">
        {/* <DefaultTemplate value={this.props.value} /> */}
        {this.renderTemplate(this.props)}
      </div>
    );
  }
}

export default Preview;
