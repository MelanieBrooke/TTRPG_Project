import React from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import Character from './Character.jsx';
import Encounters from './Encounters.jsx';
import Miscellaneous from './Miscellaneous.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    }
    this.handleTabs = this.handleTabs.bind(this);
  };

  componentDidMount() {

  }

  handleTabs(e, value) {
    // console.log(value);
    this.setState({
      tab: value
    });
  }


  render() {
    return(
      <div>
        <h1>TTRPG Meets Computer</h1>
        <AppBar position='static' >
          <Tabs value={this.state.tab} onChange={this.handleTabs}>
            <Tab label='Character'/>
            <Tab label='Encounter'/>
            <Tab label='Miscellaneous'/>
          </Tabs>
        </AppBar>
{/* Spaced out for clarity while coding */}
        <Character
        tab={this.state.tab}
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