import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from 'morgan'
import {join} from 'path'
import {log} from 'util'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'

import index from './routes/index'
import webpackConfig from '../constants/webpack.config'

const app = express()

app.use(cookieParser())
app.use(session({
	secret: 's3kr3t',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 600000
	}}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.static(join(__dirname,'public')))

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

if(app.get('env') === 'development'){
	app.use(WebpackDevMiddleware(webpack(webpackConfig),{
		publicPath: webpackConfig.output.publicPath,
		stats: [
			'progress',
			'color'
		]
	}))
}

app.use('/',index)

const startServer = config => {
	app.listen(config.port, (err) => {
		if(err){log(`Server start error:${err}`)}
		log(`App running on port:${config.port}`);
	})
}

module.exports = startServer