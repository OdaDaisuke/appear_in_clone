import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ServiceFactory from '../../service/factory'
import Home from './main_home'
import Room from './main_room'
import Header from '../components/header'
import PageFactory from './factory';

interface IMainProps {
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
    const pageFactory = new PageFactory()

    return (
        <section>
            <Header />
            <Switch>
                <Route path="/room" exact render={(props) => pageFactory.Room(props)} />
                <Route path="/" exact render={(props) => pageFactory.Home(props)} />
            </Switch>
        </section>
    )
}

export default Main