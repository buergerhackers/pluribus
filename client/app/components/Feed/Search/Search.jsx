import React from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { getTopics, selectTopic } from './SEARCH_ACTIONS.jsx';

// MATERIAL COMPONENTS
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Searchbar from 'material-ui/AppBar';
import EyeGlass from 'material-ui/svg-icons/action/search';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      open: false,
      currentTopic: '',
    };
    this.props.dispatch(getTopics());
    this._selectTopic = this._selectTopic.bind(this);
    this._textSearch = this._textSearch.bind(this);
    this._handleRequestClose = this._handleRequestClose.bind(this);
    this._check = this._check.bind(this);
  }

  _selectTopic(selected) {
    // Set store topic
    let mapBounds = this.props.mapBounds;
    selectTopic(selected, mapBounds);
    this._handleRequestClose();
    this.setState({
      currentTopic: selected,
    });
  }

  _check(e) {
    if(e.key === 'Enter') {
      this._selectTopic(e.target.value);
    }
  }
  
  _textSearch(e) {
    let text = e.target.value;
    let allTopics = this.props.allTopics;
    this.setState({
      filtered: allTopics.filter((topic) => {
        return topic.name.includes(text); 
      }),
    });
    this._handleTouchTap(e);
  }

  _handleTouchTap(e) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget,
      currentTopic: e.target.value,
    });
  }

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  
  render() {
    return (
      <Searchbar 
          iconElementLeft={<IconButton><EyeGlass color="white" /></IconButton>}
          title={<TextField
              hintText="Choose a topic!"
              fullWidth={ true }
              onChange={ this._textSearch }
              onKeyDown={ this._check }
              value= { this.state.currentTopic }
            />}
      >
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this._handleRequestClose}
            animation={PopoverAnimationVertical}
            useLayerForClickAway={false}
          >
            <List>
              {
                this.state.filtered.map((topic) => {
                  return (
                    <ListItem primaryText={ topic.name } 
                              onClick={ (e) => this._selectTopic(e.target.innerHTML) }
                    />
                  );
                })
              }
            </List>
        </Popover>
      </Searchbar>
    );
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    allTopics: store.pluribusReducer.allTopics,
    myTopics: store.pluribusReducer.myTopics,
    mapBounds: store.pluribusReducer.mapBounds,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Search);
