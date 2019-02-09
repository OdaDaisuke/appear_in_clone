import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../views/pages/home'
import Signup from '../views/pages/signup'
import ServiceFactory from '../service/factory'

const Root: React.FC<any> = () => {
    const serviceFactory = new ServiceFactory()

    return (
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route path="/signup" exact render={() => <Signup accountService={serviceFactory.accountService}/>} />
                <Route path="/" exact render={() => <Home communicationService={serviceFactory.communicationService} />} />
            </Switch>
        </Router>
    )
}

export default Root