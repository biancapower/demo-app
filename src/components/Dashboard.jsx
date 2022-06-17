import React, { Component } from 'react'
import Clock from './Clock'

class Dashboard extends Component{
	constructor(props){
		super(props)
		// define a state
		this.state = {latitude: null}

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({latitude: position.coords.latitude}),
			error => console.log(error)
		)
	}

	render (){
		const {latitude} = this.state

		return (
			<div>
				<h3>{latitude}</h3>
				<Clock date={new Date()} />
			</div>
		)
	}
}

export default Dashboard;