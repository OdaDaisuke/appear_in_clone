import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import ServiceFactory from '../../service/factory'
import Home from './main_home'
import Room from './main_room'
import Header from '../components/header'

interface IMainProps {
    serviceFactory: ServiceFactory
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
    return (
        <section>
            <Header />
            <Switch>
                <Route path="/room" exact render={() => <Room communicationService={props.serviceFactory.communicationService}/>} />
                <Route path="/" exact render={() => <Home communicationService={props.serviceFactory.communicationService} />} />
            </Switch>
        </section>
    )
}

export default Main