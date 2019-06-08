import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { getCats, createCat } from './api'


// Routes
import NewCat from './NewCat.js'
import Catchelors from './Catchelors.js'
import Catchelorettes from './Catchelorettes.js'
import HomePage from './HomePage.js'

export default class Routes extends Component {
    constructor(props){
        super(props)
      	  this.state = {
      	  cats: []
      	}
      }
      
      componentWillMount() {
        getCats()
      	.then(APIcats => {
      	  this.setState({
      		cats: APIcats
      	  })
      	})
      }
      
      handleNewCat(newCatInfo) {
    	createCat(newCatInfo)
        .then(successCat => {
            console.log("SUCCESS! New cat: ", successCat);
        })
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='Catchelors'>Catchelors</Link>
                    </li>
                    <li>
                        <Link to='Catchelorettes'>Catchelorettes</Link>
                    </li>
                </ul>
                    
                    <Switch>
                
                        <Route exact path='/' component={HomePage} />
                        
                        <Route path='/newcat' render={(props) => <NewCat handleNewCat={ this.handleNewCat } />} />
                        
                        <Route path='/Catchelors' render={(props) => <Catchelors
                                                                catchelors = { this.state.catchelors }
                                                                 />}
                                                                />
                                                                
                        <Route path='/Catchelorettes' component={Catchelorettes}/>
                    </Switch>
            </div>
        )
    }
}