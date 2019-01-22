import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends Component {
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
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Registro"
           />
           <TextField
             hintText="Introducir nombre"
             {/*floatingLabelText="Nombre" */}
             Label = "Username"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Introducir usuario"
             floatingLabelText="Usuario"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Introducir correo"
             type="email"
             floatingLabelText="Correo"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Introducir contraseña"
             floatingLabelText="Contraseña"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Registrarse" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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

const style = {
  margin: 15,
};

export default Register;
