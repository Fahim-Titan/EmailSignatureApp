import React, { Component } from "react";
import DefaultTemplate from "./signature-templates/DefaultTemplate";
import AllBlueTemplate from "./signature-templates/AllBlueTemplate";
// import Data from './signature-templates/DesignList';

class Preview extends Component {
  state = {

  }

  renderTemplate = props => {
    if(props.value.SelectTemplate === "default")    return <DefaultTemplate value={this.props.value} />;
    if(props.value.SelectTemplate === "allblue")    return <AllBlueTemplate value={this.props.value} />;
  };

  // ---- not working ----

  // renderTemplate = props => {
  //   let design;
  //   Data.forEach(element => {
  //     if(props.value.SelectTemplate === element.name){
  //       design =  <element.component value={this.props.value} />;
  //     }
  //   });
  //   return design;
  // };


  
  render() {
    return (
      <div className="shadow p-4 ">
        {this.renderTemplate(this.props)}
      </div>
    );
  }
}

export default Preview;
