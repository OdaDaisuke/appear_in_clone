import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/header'
import PageFactory from './factory'

interface IMainProps {
    pageFactory: PageFactory
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
    const pageFactory = props.pageFactory

    return (
        <section>
            <Header />
            <Switch>
                <Route path="/rooms" exact render={(props) => pageFactory.Rooms(props)} />
                <Route path="/" exact render={(props) => pageFactory.Home(props)} />
            </Switch>
        </section>
    )
}

export default Main