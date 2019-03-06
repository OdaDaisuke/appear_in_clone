import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAccessToken, setRooms, fetchRooms, resetUser } from '../../stores/actions'
import { AuthResult, TwitterProfile, FacebookProfile, GithubProfile } from '../../interfaces'

interface IHomeProps {
    fetchRooms: any
    setRooms: any
    rooms: any
    user: AuthResult
    resetUser: () => void
}

class HomePage extends React.Component<IHomeProps, any> {

    render() {
        const name = () => {
            let profile
            switch (this.props.user.authCredential.providerId) {
                case 'twitter.com':
                    profile = this.props.user.additionalUserInfo.profile as TwitterProfile
                    break
                case 'facebook.com':
                    profile = this.props.user.additionalUserInfo.profile as FacebookProfile
                    break
                case 'github.com':
                    profile = this.props.user.additionalUserInfo.profile as GithubProfile
                    break
                default:
                    return null
            }

            return <span>{profile.name}</span>
        }

        return (
            <div>
                <Link to="/rooms">Room一覧</Link>
                {name()}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)