import React from "react";

import PropTypes from 'prop-types';

class ListItem extends React.Component {

  render () {
    const {headline, url, byline} = this.props;
    return (
    <div className="panel panel-default"> 
      <div className="panel-heading">
        <a href={url} target="_blank">
          <h3 className="panel-title">{headline} {byline}</h3>
        </a>
          {this.props.children}
      </div>
    </div>
    )
  }
}

ListItem.props = {
  children: PropTypes.node
}

export default ListItem;


