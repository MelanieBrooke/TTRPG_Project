import React from 'react';
class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password1: '',
      password2: ''
      }
    }
  };
  handleChange = (e) => {

  }
  handleSubmit = (e) => {
  if (!checkPassword) {
    console.alert('Passwords don\'t match! Please try again.');
    return;
  } else {
    // if they match, send data to server to pass on to database to create the user
    // props.toggleLoggedIn();
  }
// research how to keep a user logged in on just their computer even if they refresh
  }

  checkPassword = (password1, password2) => {
    return password1 === password2;
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} required></input>
          <label for="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} required></input>
          <label for="password2">Enter Password Again</label>
          <input type="password2" name="password2" onChange={this.handleChange} required></input>
        </form>
      </div>
    )
  }
}