import React from 'react'
import { Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

const createBrowserHistory = require('history/createBrowserHistory').default
let history = createBrowserHistory()
export default () => {
    return (
        <Router history={history}>
            <div>{renderRoutes(routes)}</div>
        </Router>
    )
}