import React from 'react';
class SignUp extends React.Component{
  handleChange = (e) => {

  }
  handleSubmit = (e) => {
// check that the two password inputs match
// if they don't, clear the password inputs and make the user try again
// end function if that's the case
// if they match, send data to server to pass on to database to create the user
// research how to keep a user logged in on just their computer even if they refresh
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