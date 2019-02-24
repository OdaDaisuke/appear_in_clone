import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Main from '../views/pages/main'
import PageFactory from '../views/pages/factory'

const Root: React.FC<any> = () => {
    const pageFactory = new PageFactory()

    return (
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route path="/signup" exact render={(props) => pageFactory.Signup(props)} />
                <Route path="/about" exact render={(props) => pageFactory.About(props)} />
                <Main pageFactory={pageFactory} />
            </Switch>
        </Router>
    )
}

export default Root