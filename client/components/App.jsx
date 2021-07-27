import React from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    }
    this.handleTabs = this.handleTabs.bind(this);
    this.Tab1 = this.Tab1.bind(this);
  };

  componentDidMount() {

  }

  handleTabs(e, value) {
    console.log(value);
    this.setState({
      tab: value
    });
  }

  Tab1() {
    if (this.state.tab === 0) {
      return(<h1>Tab 1</h1>);
    } else {
      return(<div></div>)
    }
  }

  Tab2() {
    if (this.state.tab === 1) {
      return(<h1>Tab 2</h1>);
    } else {
      return(<div></div>)
    }
  }

  Tab3() {
    if (this.state.tab === 2) {
      return(<h1>Tab 3</h1>);
    } else {
      return(<div></div>)
    }
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
      </div>
    );
  }


}

export default App;