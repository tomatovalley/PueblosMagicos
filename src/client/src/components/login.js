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
   fontSize: "22px"
 }

class Login extends Component  {

  constructor(props){
      super();
      this.state = {
        username:'',
        password:''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange= this.handlePasswordChange.bind(this);
      this.aaaaa();
    }

    aaaaa () {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
    }

    handleEmailChange(e) {
      this.setState({username: e.target.value});
   }

   handlePasswordChange(e) {
      this.setState({password: e.target.value});
   }

    handleSubmit(event) {
       event.preventDefault();
       const data = this.state;

       fetch('/auth/login', {
         method: 'POST',
         headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        <form action="action_page.php">
          <div className="imgcontainer" >
            <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Inicia Sesión</h2>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={this.state.email} 
            onChange={this.handleEmailChange} />
            <br/>
            <br/>
            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handlePasswordChange}/>
            <br/>
            <br/>
            <button type="submit">Iniciar</button>
            <br/>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Recordarme
            </label>
<br/>
            <span className="psw"><a href="/">¿Olvidaste tu contraseña?</a></span>
            <br/>
              <p>¿No tienes una cuenta? <a href="/signup">Regístrate</a></p>
              <p><a href="/profile">piquele</a></p>
          </div>

        </form>
        </form>

      </div>
      </section>

    );
  }
}


export default Login;