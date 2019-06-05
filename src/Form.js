import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'


export default class Form extends Component {
    render(){
        return(
            <div>
                <form>
                    <label id='nameInput'>Name:</label>
                    <br />
                    <input type='text' name='name' />
                </form>
                <form>
                    <label id='ageInput'>Age:</label>
                    <br />
                    <input type='text' name='age' />
                </form>
                <form>
                    <label id='enjoysInput'>Enjoys:</label>
                    <br />
                    <textarea type='text' name='name' rows='8' cols='80' />
                </form>
                <input type='submit' name='Submit' />
            </div>
    )}
}