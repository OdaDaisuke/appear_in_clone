import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../views/pages/home'
import Signup from '../views/pages/signup'

const Root: React.FC<any> = () => {
    return (
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default Root