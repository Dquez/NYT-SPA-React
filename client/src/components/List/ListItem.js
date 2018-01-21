import React from "react";

import PropTypes from 'prop-types';

class ListItem extends React.Component {

  render () {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ListItem.props = {
  children: PropTypes.node
}

export default ListItem;


