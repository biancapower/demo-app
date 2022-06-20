import React, { Component } from 'react'
import Clock from './Clock'

class LocationDashboard extends Component{
	constructor(props){
		super(props)
		// define a state
		this.state = {latitude: null, errorMessage: '', date: new Date()}

		// console.log( "1. constructor runs first")
	}

	isHot(){
		const {latitude, date} = this.state
		const month = date.getMonth()

		if(((month > 4 && month <= 9) &&  latitude > 0) || ((month <= 4  || month > 9) && latitude < 0) || latitude === 0){
			return true
		}
		return false
	}

	getClockIcon(){
		if(this.isHot()){
			return "summer.png"
		}
		return "winter.png"
	}

	tick(){
		this.setState({date: new Date()})
	}

	componentDidMount(){
		// console.log( "3. componentDidMount runs *after first render*")

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({latitude: position.coords.latitude}),
			error => this.setState({errorMessage: error.message})
		)
	}

	componentDidUpdate(prevState){
		// console.log( "4. componentDidUpdate runs *after susequent renders*, not on the first render")
		if(prevState.date !== this.state.date){
			this.timerId = setInterval(() =>  this.tick() , 1000)
		}
	}

	componentWillUnmount(){
		// console.log( "5. componentWillUnmount")
		clearInterval(this.timerId)
	}

	render (){
		// console.log( "2. render runs second")
		const {latitude, errorMessage, date} = this.state
		
		return (
			<div>
				<h3>{date.toLocaleString('default', { month: 'long' })}</h3>
				<h4>Latitude: {latitude}</h4>
				{errorMessage || 
					<Clock 
						date={date}
						icon={latitude ? this.getClockIcon() : null}
					/>
				}
			</div>
		)
	}
}

export default LocationDashboard;