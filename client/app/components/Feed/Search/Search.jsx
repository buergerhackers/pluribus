import React from 'react';
import { connect } from 'react-redux';
import tapEvents from 'react-tap-event-plugin';
tapEvents();

// ACTIONS
import { getTopics, selectTopic, setTopic } from './SEARCH_ACTIONS.jsx';

// MATERIAL COMPONENTS
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Searchbar from 'material-ui/AppBar';
import EyeGlass from 'material-ui/svg-icons/action/search';
import Label from 'material-ui/svg-icons/action/label-outline';
import Backspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import Loyalty from 'material-ui/svg-icons/action/loyalty';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      open: false,
      currentTopic: '',
      clickCount: '',
    };
    this.props.dispatch(getTopics());
    this._selectTopic = this._selectTopic.bind(this);
    this._textSearch = this._textSearch.bind(this);
    this._handleRequestClose = this._handleRequestClose.bind(this);
    this._check = this._check.bind(this);
    this._setCount = this._setCount.bind(this);
    this._removeTopic = this._removeTopic.bind(this);
  }

  _selectTopic(e) {
    // This is how to retreive the topic...
    let selected = '';

    // Check is e is coming from _check
    if (typeof e === 'string') {
      selected = e;
    } else {
      // This means e is coming from clicking the List Item
      selected = e._targetInst._ancestorInfo.current.instance._currentElement.props.children;
    }

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

  _setCount() {
    this.setState({
      clickCount: 0,
    })
  }

  _removeTopic(e) {
    this.setState({
      clickCount: this.state.clickCount+=1,
    });
    if(this.state.clickCount === 2) {
      this.props.dispatch(setTopic(0, this.props.mapBounds));
      this.setState({
        currentTopic: '',
      });
    }
  }
  
  render() {
    let activeElement;
    if(this.props.currentTopicId) {
      let topic;
      let icon;
      if(this.state.clickCount === 1) {
        topic = "REMOVE";
        icon = <Backspace />;
      } else {
        topic = this.state.currentTopic;
        icon = <Loyalty />;
      };
      activeElement = <FlatButton
                        label={topic}
                        labelPosition="before"
                        primary={true}
                        icon={icon}  
                        backgroundColor={'#627072'}
                        hoverColor={'#F93E7E'}
                        onMouseEnter={ this._setCount }
                        onTouchTap={ this._removeTopic }
                      />
    } else {
      activeElement = <TextField
                        hintText="Start typing to find a Topic!"
                        fullWidth={ true }
                        onChange={ this._textSearch }
                        onKeyDown={ this._check }
                        value= { this.state.currentTopic }
                        inputStyle={{ color : 'white' }}
                      />
    }
    return (
      <Searchbar 
          iconElementLeft={<IconButton><EyeGlass color="white" /></IconButton>}
          title={activeElement}
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
                    <ListItem key={ topic.id }
                              onTouchTap={ this._selectTopic }
                              primaryText={ topic.name }
                              leftIcon={<Label />}
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
    currentTopicId: store.pluribusReducer.currentTopicId
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Search);
