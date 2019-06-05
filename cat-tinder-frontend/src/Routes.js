import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'


// Routes
import Form from './Form.js'
import Catchelors from './Catchelors.js'
import Catchelorettes from './Catchelorettes.js'

export default class Routes extends Component {
    constructor(props){
        super(props)
        this.state = {
            resetPage:[], 
            catchelors: [
                {
                    id: 1,
                    name: 'Tom-Tom',
                    age: '3',
                    enjoys: 'cat naps'
                    
                },
                {
                    id: 2,
                    name: 'Nibbles',
                    age: '2',
                    enjoys: 'eating catnip'
                    
                },
                {
                    id: 3,
                    name: 'Scratchy',
                    age: '4',
                    enjoys: 'scratching his post'
                    
                },
                ],
                catchelorettes: [
                {
                    id: 1,
                    name: 'Catlynn',
                    age: '3',
                    enjoys: 'Tom-foolery'
                    
                },
                {
                    id: 2,
                    name: 'Lola',
                    age: '2',
                    enjoys: 'playing basketball'
                    
                },
                {
                    id: 3,
                    name: 'Catalina',
                    age: '4',
                    enjoys: 'wine... mixers'
                    
                },
                ]
        }
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
                        <Route exact path='/' component={Form}/>
                        <Route path='/Catchelors' render={(props) => <Catchelors
                                                                catchelors = { this.state.catchelors }
                                                                resetPage = { this.state.resetPage }
                                                                 />}
                                                                />
                        <Route path='/Catchelorettes' component={Catchelorettes}/>
                    </Switch>
            </div>
        )
    }
}