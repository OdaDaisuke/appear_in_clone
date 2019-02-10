import * as React from 'react'
import ServiceFactory from '../../service/factory'
import Home from './main_home'
import Room from './main_room'

export default class PageFactory {
    constructor() {
    }

    Home(props: Object) {
        return <Home
            {...props}
        />
    }

    Room(props: Object) {
        return (
            <Room
                {...props}
            />
        )
    }

}