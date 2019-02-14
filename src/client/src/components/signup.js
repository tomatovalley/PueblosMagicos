import React, { Component } from 'react';
import Background from './portada4.jpg';
import { Link } from 'react-router-dom';

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
  constructor(props){
    super();
    this.state = {
      username:'',
      email:'',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);

  }

  handleInfoChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
     event.preventDefault();
     const data = this.state;

     fetch('/auth/signup', {
       method: 'POST',
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
     }).then(response => response.json())
    .then(data => console.log('Repuesta'+ data))
    .catch(error => console.error('Error:', error))
   }



  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <form style={formInput} action="action_page.php">
            <div className="imgcontainer" >
              <label> </label>
            </div>

            <div style={TodoComponent}>
              <h2 style={Header}>Regístrate</h2>
              <input style={oneinput}
              type="text" 
              name="username" 
              placeholder="nombre de usuario" 
              value={this.state.username} 
              onChange={this.handleInfoChange} />
              <br/>
              <br/>
              <input style={oneinput}
              type="text" 
              name="email" 
              placeholder="correo" 
              value={this.state.email} 
              onChange={this.handleInfoChange} />
              <br/>
              <br/>
              <input style={oneinput}
              type="password" 
              name="password" 
              placeholder="contraseña" 
              value={this.state.password} 
              onChange={this.handleInfoChange}/>
              <br/>
              <br/>
              <button style={btn} type="submit">Iniciar</button>
              <br/>
              <label>
                <input type="checkbox" checked="checked" name="remember"/> Recordarme
              </label>
              <br/>
              <br/>
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>

            </div>

          </form>
        </form>
      </div>
      </section>
    );

  }
}

export default Signup;
