import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes.js'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h2 className='title'>Cat Tinder</h2>
          <HashRouter>
            <Routes />
          </HashRouter>
      </div>
      )
    
    }
  }

export default App;
