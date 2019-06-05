import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Catchelors extends Component {
    render(){
        const { match } = this.props
        // const reset = () => {
        //     this.setState ({resetPage:[]})
        
       
        return(
            <div>
            <button onClick>The Random The love of your 9 lives is:</button>
                
                <h1>  {this.props.catchelors[Math.floor(Math.random()*3)].name}</h1>
            </div>
    )}
}