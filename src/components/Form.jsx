import React, { Component } from 'react'
import "../css/form.css"

class Form extends Component{
	constructor(props){
		super(props)
		this.state = null
	}

	render(){
		return(
			<div>
				<h1>Form</h1>
				<form className='login-form'>
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
