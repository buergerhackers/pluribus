import React from 'react';

import {ListItem} from 'material-ui/List';
import Label from 'material-ui/svg-icons/action/label-outline';

export default class DropdownListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem primaryText={ this.props.topic.name }
                leftIcon={<Label />}
                onClick={ this.props.onClick } />
    );
  }
}
