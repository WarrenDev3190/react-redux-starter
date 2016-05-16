import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import pointsReducer from '../reducers/pointsReducer'

const loggerMiddleware = createLogger()

const configureStore = (initialState) => {
	return createStore(
		pointsReducer,
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)
}

export default configureStore