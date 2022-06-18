import React, { Component } from 'react'
import "../css/form.css"
import { data } from '../data/users'

class Form extends Component{
	constructor(props){
		super(props)
		this.state = {
			errorMessage: "",
			username: "🤔",
			email: "",
			password: ""
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
		
		const { email, password } = this.state

		const foundUser = data.find((user) => user.email === email)

		if (foundUser) {
			if (password === foundUser.password) {
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

	onInputChange = (event) => {
		this.setState({
			// sets state for both email and password
			[event.target.id]: event.target.value
		})
		console.log(event.target.value)
	}

	render(){
		const { email, password, username, errorMessage } = this.state

		return(
			<div>
				{errorMessage && <p>{errorMessage}</p>}
				{username ? 
					<p>Your username is: {username}</p> 
					: 
					<p>Your login details are incorrect</p>
				}
				<h1>Reveal your username</h1>
				<form className='login-form' onSubmit={this.onFormSubmit}>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email"
						value={email} onChange={this.onInputChange} />
					
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password"
						value={password} onChange={this.onInputChange} />
					
					<input type="submit" value="Submit me!" />
				</form>
			</div>
		)
	}
}

export default Form;
