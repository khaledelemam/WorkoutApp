import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './index.css'

class Signin extends React.Component{

  render(){
    return(
      <div id='container'>
        <div id='title'>
         <h1> Sign in </h1>
        </div>
        <form>
          <TextField
            variant = 'outlined'
            margin='normal'
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant = 'outlined'
            margin='normal'
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
          />
          <div id='signin_button'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
          <div id="sign_up_text">
            <a href="#">
              <h2>
                Don't have an account? Sign Up
              </h2>
            </a>
          </div>

        </form>
      </div>
    );
  }
}

export default Signin;
