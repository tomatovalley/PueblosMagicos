import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
    }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           /> <br/>
        <TextField
          id="txt_user"
          label="Usuario"
          onChange = {(event,newValue) => this.setState({username:newValue})}
          margin="normal"
          variant="filled"
        /> <br/>
        <TextField
          id="txt_password"
          label="Contraseña"
          onChange = {(event,newValue) => this.setState({password:newValue})}
          margin="normal"
          variant="filled"
        /> <br/>

      <RaisedButton label="Iniciar sesión" primary={true} onClick={(event) => this.handleClick(event)}/>

           <hr></hr>
             <div className="text-center">
             <p>¿Necesitas una cuenta? <a href="/signup">Regístrate</a></p>
             <p>o puede ir a <a href="/">Inicio</a>.</p>
            </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
