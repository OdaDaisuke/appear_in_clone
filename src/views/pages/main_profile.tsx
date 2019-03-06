import * as React from 'react'
import { connect } from 'react-redux'
import { setAccessToken, setRooms, fetchRooms, resetUser } from '../../stores/actions'
import { AuthResult } from '../../interfaces'

interface Props {
    fetchRooms: any
    setRooms: any
    rooms: any
    user: AuthResult
    resetUser: () => void
}

class ProfilePage extends React.Component<Props, any> {

    render() {

        return (
            <div>
                profile
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accessToken: state.accountReducer.accessToken,
        user: state.accountReducer.user,
        rooms: state.roomReducer.rooms,
    }
}

const mapDispatchToProps = {
    setAccessToken,
    fetchRooms,
    setRooms,
    resetUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)