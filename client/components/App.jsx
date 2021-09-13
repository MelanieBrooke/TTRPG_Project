import React from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import Character from './Character.jsx';
import Encounters from './Encounters.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import Creation from './Creation.jsx';
import Login_Signup from './Login_Signup.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      login: false,
      user: null,
      creationPopup: false,
      creation: {
        race: null
      }
    }
    this.handleTabs = this.handleTabs.bind(this);
    this.toggleCreationPopup = this.toggleCreationPopup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoggedIn = this.toggleLoggedIn.bind(this);
  };

  componentDidMount() {
    // find out how to tell if someone is logged in
  }

  handleTabs(e, value) {
    this.setState({
      tab: value
    });
  }

  toggleLoggedIn() {
    this.setState({
      login: !this.state.login
    });
  }

  logInUser(userName) {
    this.setState({
      login: true,
      user: userName
    })
  }

  toggleCreationPopup() {
    this.setState({
      creationPopup: !this.state.creationPopup
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit pressed!')
    // console.log(e.target.value);
  }

  handleChange(e) {
    e.preventDefault();
    var value = e.target.value;
    var name = e.target.name;
    console.log(value, name);
    console.log(this.state.creation[name])
    this.state.creation[name] = value;
    this.setState({
      creation:this.state.creation
    });
    console.log('state:', this.state);
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
            <Tab label='Login_Signup'/>
          </Tabs>
        </AppBar>
{/* Spaced out for clarity while coding */}
        <Creation
        creationPopup={this.state.creationPopup}
        toggleCreationPopup={this.toggleCreationPopup}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        creation={this.state.creation}
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

        <Login_Signup
          tab={this.state.tab}
          login={this.state.login}
          toggleLoggedIn={this.toggleLoggedIn}
          user={this.state.user}
        />

      </div>
    );
  }


}

export default App;