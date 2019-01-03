import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Introducir usuario"
             floatingLabelText="Usuario"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Introducir contraseña"
               floatingLabelText="Contraseña"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Iniciar sesión" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

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
const style = {
 margin: 15,
};
export default Login;
