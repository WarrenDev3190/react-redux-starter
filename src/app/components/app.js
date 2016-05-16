import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions/pointsActions'

class App extends Component{
	constructor(props){
		super(props)
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}

	increment(){
		const {dispatch} = this.props
		console.log(increment);
		dispatch(increment())
	}

	decrement(){
		const {dispatch} = this.props
		dispatch(decrement())
	}

	render(){
		const {points} = this.props
		return (
			<div>
				<h2>{points}</h2>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const {points} = state
	return {
		points
	}
}

export default connect(mapStateToProps)(App)