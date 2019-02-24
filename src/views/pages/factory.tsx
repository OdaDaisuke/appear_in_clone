import * as React from 'react'
import Home from './main_home'
import Rooms from './main_rooms'
import Signup from './signup'
import About from './about'

export default class PageFactory {
    constructor() {
    }

    Home(props: Object) {
        return <Home {...props} />
    }

    Rooms(props: Object) {
        return <Rooms {...props} />
    }

    Signup(props: Object) {
        return <Signup {...props} />
    }

    About(props: Object) {
        return <About {...props} />
    }

}