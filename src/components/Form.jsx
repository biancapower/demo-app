import React, { Component } from 'react'
import "../css/form.css"
import { data } from '../data/users'

class Form extends Component{
	constructor(props){
		super(props)
		this.state = {
			errorMessage: "",
			username: "🤔"
		}
	}

	onFormSubmit = (event) => {
		console.log(data)
		
		// prevents default browser behaviour
		// including generation of query params
		// 					and refresh of page
		event.preventDefault()

		// clear out these values when form is submitted
		// to prevent old messages continuing to be displayed
		this.setState({errorMessage: "", username: ""})

		// event.target is the form
		// console.log(event.target.children)
		
		const formElements = event.target.children
		const emailInput = formElements[1]
		const passwordInput = formElements[3]
		const emailValue = emailInput.value
		const passwordValue = passwordInput.value

		const foundUser = data.find((user) => user.email === emailValue)

		if (foundUser) {
			if (passwordValue === foundUser.password) {
				this.setState({
					username: foundUser.username
				})
			}
		} else {
			this.setState({
				errorMessage: "No matches found"
			})
		}
	}

	render(){
		return(
			<div>
				{this.state.errorMessage && <p>{this.state.errorMessage}</p>}
				{this.state.username ? 
					<p>Your username is: {this.state.username}</p> 
					: 
					<p>Your login details are incorrect</p>
				}
				<h1>Reveal your username</h1>
				<form className='login-form' onSubmit={this.onFormSubmit}>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email" />
					
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password" />
					
					<input type="submit" value="Submit me!" />
				</form>
			</div>
		)
	}
}

export default Form;
