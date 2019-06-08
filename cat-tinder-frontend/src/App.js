import React, { Component } from 'react';
import './App.css';
import NewCat from './NewCat.js';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes.js';
import { getCats, createCat } from './api'

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


