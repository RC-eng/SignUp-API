import React, {Component} from 'react';
import './App.css';

class App extends Component {

  validateFields() {

    var firstNameVar = document.getElementById("firstnameValue").value;
    var lastNameVar = document.getElementById("lastnameValue").value;
    var emailVar = document.getElementById("emailValue").value;
    var mobileVar = document.getElementById("mobileValue").value;
    var webVar = document.getElementById("webValue").value;

    console.log(firstNameVar)
    alert(lastNameVar)
    alert(emailVar)
    alert(mobileVar)
    alert(webVar)
  }
  render() {
    return (
      <div classnameapp="App">
        <center>
          <img src="glyphlogo.png" alt="GlyphLogo" width="300px" height="170px"/>
        </center>
        <p>*This is an exam for a Full-Stack developer.</p>
        
        <form>
          <fieldset>
            <center>
              <br></br>
              <input placeholder="First Name" id="firstNameValue"></input><br></br><br></br>
              <input placeholder="Last Name" id="lastNameValue"></input><br></br><br></br>
              <input placeholder="E-mail" id="emailValue"></input><br></br><br></br>
              <input placeholder="Mobile Number (+639)" id="mobileValue"></input><br></br><br></br>
              <input placeholder="Website URL" id="webValue"></input><br></br><br></br>
              <button onClick={this.validateFields}>Sign-Up</button>
            </center>
          </fieldset>
        </form>
      </div>

    );
  }
}
export default App;
