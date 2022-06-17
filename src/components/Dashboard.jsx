import React, { Component } from 'react'
import Clock from './Clock'

class Dashboard extends Component{
	constructor(props){
		super(props)
		// define a state
		this.state = {latitude: null, errorMessage: ''}

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({latitude: position.coords.latitude}),
			error => this.setState({errorMessage: error.message})
		)
	}

	render (){
		const {latitude, errorMessage} = this.state

		return (
			<div>
				<h3>{latitude}</h3>
				{errorMessage || <Clock date={new Date()} />}
			</div>
		)
	}
}

export default Dashboard;