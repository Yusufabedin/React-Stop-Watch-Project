import React, { Component } from 'react'
import './Title.css'

class Title extends Component {

    state = {
        title: 'this is dummy titel',
        isInput: false
    }

//when click on edit button apply this methods
    editHandler = () => {
        this.setState({ ...this.state,isInput: true })
        
    }

    // Change Event

    inputChange(event){
        this.setState({
            ...this.state,
            title: event.target.value
        })
        
    }

    //Keypress event

    onKeyPressHandeler(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false
            })
        }
        
    }

    //Blur event
    blurHandeler(event){
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    
  
    render() { 
        let output = null
        
        if(this.state.isInput) {
                output = (
                    <div className="Title">
                    <input className="form-control"
                     type="text" 
                     onChange={ event => this.inputChange(event) }
                     onKeyPress ={ event => this.onKeyPressHandeler(event)}
                     onBlur={ event => this.blurHandeler(event)}
                     value={ this.state.title }/>
                    </div>
                )
        }else{
            output = (
                <div className="d-flex Title">
                <h1 className="display-4"> {this.state.title} </h1>
                <span  className="ml-auto edit-icon" onClick={this.editHandler}>
                    <i className="fas fa-pencil-alt"></i>
                    </span> 
                </div>
            )
        }

        return ( 
            <div>
                { output }
            </div>
        )
    }
}

export default Title