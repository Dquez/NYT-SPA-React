import React from "react";
import "./List.css";
import PropTypes from 'prop-types';

class List extends React.Component {

  render () {

    return (
      // <div className="list-overflow-container">
        // <ul className="list-group">
      //     {this.props.children}
      //   </ul>
      // </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title text-center">{this.props.children}</h3>
                  </div>
                </div>
    );
  }
}

List.props = {
  children: PropTypes.node
}

export default List;

