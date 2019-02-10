import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import ServiceFactory from '../service/factory'
import Signup from '../views/pages/signup'
import About from '../views/pages/about'
import Main from '../views/pages/main'

const Root: React.FC<any> = () => {
    return (
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route path="/signup" exact render={() => <Signup />} />
                <Route path="/about" exact render={() => <About />} />
                <Main />
            </Switch>
        </Router>
    )
}

export default Root