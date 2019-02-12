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
   alignItems: "center",
   paddingBottom: "20px"
 }
 const formInput = {
   borderRadius: "5px",
   padding: "10px",
 }
 const oneinput ={
  width:"60%",
  border:"1px solid RGBA(0,0,0,.3)",
  marginTop:"10px",
  marginBottom:"10px",
  borderRadius: "5px",
  padding: "5px",
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
   marginTop: "8px"
 }

class Signup extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">

        <form style={formInput} action="action_page.php">
          <div class="imgcontainer" >
            <label> </label>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Regístrate</h2>
            <input style={oneinput} type="text" placeholder="Nombre" name="name" required/>
            <input style={oneinput} type="text" placeholder="Usuario" name="uname" required/>
            <input style={oneinput} type="email" placeholder="Correo electrónico" name="mail" required/>
            <input style={oneinput} type="password" placeholder="Contraseña" name="psw" required/>
            <button style={btn} type="submit">Registrame</button>
          </div>

        </form>

      </div>
      </section>
    );

  }
}
export default Signup;
