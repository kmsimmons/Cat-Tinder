import React, { Component } from 'react'
import { HashRouter, Redirect } from 'react-router-dom'
import { Col, Container, Row, Form } from 'react-bootstrap'



export default class NewCat extends Component {
    constructor(props){
      super(props)
      this.state = {
        form: {
          name: '',
          age: '',
          enjoys: ''
      }
      }
    }
    
    
    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }
    
    handleNewCat = () => {
        const { handleNewCat } = this.props
        handleNewCat(this.state.form)
    }
    
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' name='name' onChange={this.handleChange} value={this.state.form.name} />
                    </Form.Group>
                
                    <Form.Group controlId='age'>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control type='text' name='age' onChange={this.handleChange} value={this.state.form.age} />
                    </Form.Group>
                    
                    <Form.Group controlId='enjoys'>
                        <Form.Label>Enjoys:</Form.Label>
                        <Form.Control type='text' name='enjoys' onChange={this.handleChange} value={this.state.form.enjoys} />
                    </Form.Group>
                   
                    <button onClick={this.handleNewCat} type='submit'>Submit</button>
                    
                </Form>
                {this.props.success && <Redirect to='/cats' />}
            </div>
    )}
}

//this used to be below '<textarea... cols='80' />'
//<input type='submit' name='Submit' />
