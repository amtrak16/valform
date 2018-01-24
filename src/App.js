import React, { Component } from 'react';
import './App.css';

// Week 3 Validate Form Exercise

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      disableSbmBtn: true,
      unLabel: '',
      pwLabel: '',
      unValid: false,
      pwValid: false,
      success: false
    }
    this.unChange = this.unChange.bind(this);
    this.pwChange = this.pwChange.bind(this);
    this.onFrmSbm = this.onFrmSbm.bind(this);
  }

  unChange(evt) {
    if (evt.target.value.length < 8) {
      this.setState({ username: evt.target.value, unLabel: 'Name should be at least 8 characters.', unValid: false, disableSbmBtn: true})
    } else {
      if (this.state.pwValid) {
        this.setState({ username: evt.target.value, unLabel: '', unValid: true, disableSbmBtn: false })
      } else {
        this.setState({ username: evt.target.value, unLabel: '', unValid: true, disableSbmBtn: true })
      }
    }
  }
  pwChange(evt) {
    let arr = []
    arr = evt.target.value
    if (arr.indexOf('@') === -1) {
      this.setState({ password: evt.target.value, pwLabel: 'Email should be a valid email address.', pwValid: false, disableSbmBtn: true})
    } else {
      if(this.state.unValid){
        this.setState({ password: evt.target.value, pwLabel: '', pwValid: true, disableSbmBtn: false })
      } else {
        this.setState({ password: evt.target.value, pwLabel: '', pwValid: true, disableSbmBtn: true })
      }
    }
  }
  onFrmSbm(evt) {
    evt.preventDefault()
    this.setState({success: true})
  }

  render() {    
    return (
      <div className="App">
          <form id='valform' onSubmit={this.onFrmSbm}>
            <h1 className="App-title">Validated Form</h1> 
            {!this.state.success &&
              <div id='leftdiv'>
                <div id='lldiv'>
                  <input id='username' onChange={this.unChange} placeholder='Name'/> 
                  <input id='password' onChange={this.pwChange} placeholder='Password'/>  
                  <button id='sbmbtn' disabled={this.state.disableSbmBtn}>Submit</button>
                </div>
                <div id='lrdiv'>
                  <label id='unLabel' >{this.state.unLabel}</label>
                  <label id='pwLabel' >{this.state.pwLabel}</label>
                </div>
              </div>
            }
            {this.state.success &&
              <div id='successdiv'>
                <h1 className="Success-title">Thanks!</h1> 
              </div>
            }
          </form>
      </div>
    );
  }
}

export default App;
