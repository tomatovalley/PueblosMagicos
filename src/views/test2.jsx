import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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

class Prueba extends React.Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      username:'',
      email:'',
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
             title="Test"
           /> <br/>
        <TextField
          id="txt_name"
          label="Nombre"
          onChange = {(event,newValue) => this.setState({first_name:newValue})}
          margin="normal"
          variant="filled"
        /> <br/>
        <TextField
          id="txt_user"
          label="Usuario"
          onChange = {(event,newValue) => this.setState({last_name:newValue})}
          margin="normal"
          variant="filled"
        /> <br/>
        <TextField
          id="txt_email"
          label="Correo"
          onChange = {(event,newValue) => this.setState({email:newValue})}
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
      <RaisedButton label="Registrarse" primary={true} onClick={(event) => this.handleClick(event)}/>
        <hr></hr>
        <div className="text-center">
          <p>¿Ya tienes una cuenta? <a href="/login">Login</a></p>
          <p>o puede ir a <a href="/">Inicio</a>.</p>
        </div>
      </div>
     </MuiThemeProvider>
  </div>
    );
  }
}

Prueba.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Prueba);
