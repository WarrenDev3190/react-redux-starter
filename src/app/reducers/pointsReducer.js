import {combineReducers} from 'redux'
import {INCREMENT, DECREMENT} from '../actions/pointsActions'
import {routerReducer} from 'react-router-redux'

const points = (state = 0, action) => {
	switch(action.type){
		case INCREMENT:
			return state + 1
		case DECREMENT:
			return state - 1
		default:
			return state
	}
}

const pointsReducer = combineReducers({
	points,
	routing: routerReducer
})

export default pointsReducer