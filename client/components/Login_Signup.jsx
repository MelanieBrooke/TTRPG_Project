import React from 'react';

const Login_Signup = (props) => {
  // do stuff and things here
  if (props.tab === 3) {
    if (!props.login) {
      return (<div>
                <br></br>
                <br></br>
                <button>Log In</button>
                <h2>or</h2>
                <button>Create Account</button>
                <br></br>
                <br></br>
                <h1>Will Eventually Be the Account Page Probably</h1>
              </div>)
    } else {
        return (
          <div>
            <h1> Account Details Here </h1>
            <button>Log Out</button>
          </div>
        )
    }
  } else {
    return (<div></div>);
  }
}

export default Login_Signup;