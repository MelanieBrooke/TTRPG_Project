import React from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import Character from './Character.jsx';
import Encounters from './Encounters.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import Creation from './Creation.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      creationPopup: false
    }
    this.handleTabs = this.handleTabs.bind(this);
    this.toggleCreationPopup = this.toggleCreationPopup.bind(this);
  };

  componentDidMount() {

  }

  handleTabs(e, value) {
    this.setState({
      tab: value
    });
  }

  toggleCreationPopup() {
    this.setState({
      creationPopup: !this.state.creationPopup
    });
  }


  render() {
    return(
      <div>
        <h1>TTRPG Meets Computer</h1>
        <AppBar position='static' >
          <Tabs value={this.state.tab} onChange={this.handleTabs}>
            <Tab label='Character Sheet'/>
            <Tab label='Encounter'/>
            <Tab label='Miscellaneous'/>
          </Tabs>
        </AppBar>
{/* Spaced out for clarity while coding */}
        <Creation
        creationPopup={this.state.creationPopup}
        toggleCreationPopup={this.toggleCreationPopup}
        />

        <Character
        tab={this.state.tab}
        toggleCreationPopup={this.toggleCreationPopup}
        />

        <Encounters
          tab={this.state.tab}
        />

        <Miscellaneous
          tab={this.state.tab}
        />

      </div>
    );
  }


}

export default App;