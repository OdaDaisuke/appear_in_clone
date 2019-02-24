import * as React from 'react'
import ServiceFactory from '../../service/factory'
import Home from './main_home'
import Rooms from './main_rooms'

export default class PageFactory {
    constructor() {
    }

    Home(props: Object) {
        return <Home
            {...props}
        />
    }

    Rooms(props: Object) {
        return (
            <Rooms
                {...props}
            />
        )
    }

}