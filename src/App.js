import React, { Component } from 'react';
import Background from './portada4.jpg';

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  display: "flex",
  justifyContent:"center",
  alignItems: "center"
 };

 const TodoComponent = {
   borderRadius:"5px",
   width: "400px",
   backgroundColor: "white",
   minHeight: "250px",
   boxSizing: "border-box",
   textAlign: "center",
   display: "flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems: "center"
 }
 const formInput = {
   width:"70%",
   borderRadius: "5px",
   border:"1px solid RGBA(0,0,0,.3)",
   padding: "10px",
   marginTop:"10px",
   marginBottom:"10px",
 }
 const Header = {
   padding: "10px 20px",
   textAlign: "center",
   color: "black",
   fontSize: "50px",
 }

 const btn ={
   all: "unset",
   backgroundColor: "#2f89fc",
   padding: "8px 20px",
   borderRadius: "5px",
   color: "white",
   textTransform: "uppercase",
   boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)",
 }

class App extends Component  {

  constructor(props){
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
       event.preventDefault();
       const data = new FormData(event.target);

       fetch('/login', {
         method: 'POST',
         body: data,
       });
   }

  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">

<form onSubmit={this.handleSubmit}>
        <form action="action_page.php">
          <div class="imgcontainer" >
            <label> </label>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Inicia Sesión</h2>
            <input style={formInput} type="text" placeholder="Usuario" name="uname" required/>
            <input style={formInput} type="password" placeholder="Contraseña" name="psw" required/>
            <button style={btn} type="submit">Iniciar</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Recuerdame
            </label>
            <span class="psw"><a href="/">¿Olvidaste tu contraseña?</a></span>
              <p>¿No tienes una cuenta? <a href="/signup">Regístrate</a></p>
              <p><a href="/profile">Perfil_Prueba</a></p>
          </div>

        </form>
        </form>

      </div>
      </section>

    );
  }
}

export default App;
