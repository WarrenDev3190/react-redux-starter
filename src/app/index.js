import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import App from './components/app'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './constants/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}/>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))