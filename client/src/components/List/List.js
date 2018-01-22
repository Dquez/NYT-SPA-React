import React from "react";
import "./List.css";
import PropTypes from 'prop-types';

class List extends React.Component {

  render () {

    return (
      <div class="panel panel-default">
        <div class="panel-heading text-center"><h2>{this.props.title}</h2></div>
        <div class="panel-body">{this.props.children}</div>
      </div>
    );
  }
}

List.props = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default List;

