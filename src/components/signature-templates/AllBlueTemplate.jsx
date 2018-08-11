import React from "react";

const AllBlueTemplate = props => {
  let nameStyle = {
    color: "Blue",
    fontSize: "1.5rem",
    paddingLeft: "1rem"
  };
  let designationStyle = {
    color: "grey",
    fontSize: "0.8rem",
    paddingLeft: "1rem"
  };
  let companyStyle = {
    color: "grey",
    fontSize: "1rem",
    fontWeight: "bold",
    paddingLeft: "1rem"
  };
  let contactStyle = {
    fontSize: "1rem",
    paddingLeft: "1rem",
    paddingTop: "0px"
  };
  let contactLabelStyle = {
    color: "Blue",
    fontSize: "1rem",
    paddingTop: "0px"
  };
  let tableStyle = {
    borderLeft: "3px solid Blue",
    paddingLeft: "1rem"
  };

  return (
    <React.Fragment>
      <table className="table table-borderless table-sm" style={tableStyle}>
        <tbody>
          <tr>
            <td style={nameStyle}>{props.value.Name}</td>
          </tr>
          <tr>
            <td style={designationStyle}>{props.value.Designation}</td>
          </tr>
          <tr>
            <td style={companyStyle}>{props.value.Company}</td>
          </tr>
          <tr>
            <td style={contactStyle}>
              {props.value.Contact !== "" ? (
                <span style={contactLabelStyle}>m : </span>
              ) : null}
              {props.value.Contact !== "" ? props.value.Contact : null}
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default AllBlueTemplate;
