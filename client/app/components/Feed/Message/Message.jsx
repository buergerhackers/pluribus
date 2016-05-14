import React from 'react';

// material-ui components
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Pin from 'material-ui/svg-icons/maps/pin-drop';
import Paper from 'material-ui/Paper';

// map utils
import { rePosition } from '../../Map/map_utils.jsx';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this._reLoc = this._reLoc.bind(this);
  }
  _reLoc() {
    // "snap" center of map to plurb location
    rePosition(this.props.plurb);
  }
  render() {
    let image = this.props.plurb.picture;
    console.log('plurbId',this.props.plurb.id);
    return (
      <Paper>
        <ListItem
          leftAvatar={<Avatar 
            onMouseEnter={ () => {console.log('Change to add friend state')}} 
            onClick={ () => {console.log('Add friend!')} } src={image} />}
          primaryText={ this.props.plurb.text }
          rightIcon={<Pin onClick={ this._reLoc } />}
          style={{width: '96%'}}
        />
      </Paper>
    )
  }
}
