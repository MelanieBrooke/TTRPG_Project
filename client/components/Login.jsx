import React from 'react';
class Login extends React.Component{
  handleChange = (e) => {

  }
  handleSubmit = (e) => {

  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} required></input>
          <label for="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} required></input>
        </form>
      </div>
    )
  }
}