import React, { Component } from 'react'
import Clock from './Clock'

class Dashboard extends Component{
	constructor(props){
		super(props)
		// define a state
		this.state = {latitude: null, errorMessage: '', today: new Date()}

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({latitude: position.coords.latitude}),
			error => this.setState({errorMessage: error.message})
		)
	}

	isNorth(){
		const {latitude} = this.state

		return latitude > 0
	}

	getClockIcon(){
		if(this.isNorth()){
			return "summer.png"
		}
		return "winter.png"
	}

	render (){
		const {latitude, errorMessage, today} = this.state
		
		return (
			<div>
				<h3>{today.toLocaleString('default', { month: 'long' })}</h3>
				<h4>Latitude: {latitude}</h4>
				{errorMessage || 
					<Clock 
						date={today}
						icon={latitude ? this.getClockIcon() : null}
					/>
				}
			</div>
		)
	}
}

export default Dashboard;