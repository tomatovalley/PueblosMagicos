import React, { Component } from 'react';
import Background from './portada4.jpg';

var sectionStyle = {
 width: "100%",
 height: "640px",
 backgroundImage: `url(${Background})`,
 backgroundSize: 'cover'
};

const TodoComponent = {
  width: "400px",
  margin: "100px auto",
  backgroundColor: "rgba(200, 200, 195, 0.75)",
  minHeight: "250px",
  boxSizing: "border-box",
  textAlign: "center",
}
const Header = {
  padding: "10px 20px",
  textAlign: "center",
  color: "black",
  fontSize: "25px"
}



class Signup extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">

        <form action="action_page.php">
          <div class="imgcontainer" >
            <label> </label>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Regístrate</h2>
            <input type="text" placeholder="Nombre" name="name" required/>
            <br/>
            <br/>
            <input type="text" placeholder="Usuario" name="uname" required/>
            <br/>
            <br/>
            <input type="email" placeholder="Correo electrónico" name="mail" required/>
            <br/>
            <br/>
            <input type="password" placeholder="Contraseña" name="psw" required/>
            <br/>
            <br/>
            <button type="submit">Iniciar</button>
            <br/>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Recordarme
            </label>
            <br/>
            <br/>
              <p>¿Ya tienes una cuenta? <a href="/">Inicia sesión</a></p>

          </div>

        </form>

      </div>
      </section>
    );

  }
}

export default Signup;