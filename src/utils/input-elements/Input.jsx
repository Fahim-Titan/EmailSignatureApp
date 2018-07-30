import React  from "react";


const Input = (props) => {
    return ( 
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
              type={props.type}
              id={props.id}
              name={props.name}
              placeholder= {props.placeholder}
              value = { props.value }
              onChange={props.onChange}
              className="form-control"
              aria-describedby="emailHelp"
            />
            {/* <small id={this.props.} className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
        </div>
     );
}
 
export default Input;