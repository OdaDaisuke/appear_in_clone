import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ServiceFactory from '../../service/factory'
import Home from './main_home'
import Rooms from './main_rooms'
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
                <Route path="/rooms" exact render={(props) => pageFactory.Rooms(props)} />
                <Route path="/" exact render={(props) => pageFactory.Home(props)} />
            </Switch>
        </section>
    )
}

export default Main