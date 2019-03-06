import * as React from 'react'
import * as ReactRouter from 'react-router'
import HomePage from './main_home'
import RoomPage from './main_room'
import RoomsTop from './main_rooms_top'
import ProfilePage from './main_profile'
import SignupPage from './signup'
import AboutPage from './about'

type RoomPageParams = {
    id: string
}

export default class PageFactory {
    constructor() {
    }

    Home(props: Object) {
        return <HomePage {...props} />
    }

    RoomsTop(props: Object) {
        return <RoomsTop {...props} />
    }

    RoomPage(props: { match: ReactRouter.match<RoomPageParams> }) {
        const id = props.match.params.id
        return <RoomPage roomId={id} />
    }

    Profile(props: Object) {
        return <ProfilePage {...props} />
    }

    Signup(props: Object) {
        return <SignupPage {...props} />
    }

    About(props: Object) {
        return <AboutPage {...props} />
    }

}