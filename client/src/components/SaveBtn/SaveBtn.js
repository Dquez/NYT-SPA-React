import React from "react";
import PropTypes from 'prop-types';
import "./SaveBtn.css";

class SaveBtn extends React.Component {
  
  render () {
    return (
      <button className="save-btn btn btn-sm d-inline" onClick={this.props.onClick}>
        Save
      </button>
    );
  }
}

SaveBtn.props = {
  onClick: PropTypes.func
}

export default SaveBtn;
