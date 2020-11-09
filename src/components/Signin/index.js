import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './index.css'
import Home from "../Home"
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
class Signin extends React.Component{
  state = {
    user: {
      username:'',
      password:''
    }
  }
  onChange = text => ({ target: {value}}) => {
    this.setState({
      user: {
        ...this.state.user,
        [text]: value
      }
    })
  }
  render(){
    const {user :{username, password}} = this.state
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
            label="Username"
            name="username"
            onChange = {this.onChange('username')}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant = 'outlined'
            margin='normal'
            required
            fullWidth
            label="Password"
            name="password"
            onChange = {this.onChange('password')}
            autoComplete="password"
            autoFocus
          />
          <div id='signin_button'>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component = {Link} to= {nice(this.state.user.username, this.state.user.password)}
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

function nice (username, password){
  if(username==='user' && password==='user'){
    return "/"
  }
  else if (username==='admin' && password==='admin') {
    return "/"
  }
  else {
    return (
      "/SignIn"
    )
  };

}
export default Signin;
