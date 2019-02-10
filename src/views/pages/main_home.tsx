import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAccessToken, setRooms, fetchRooms, signIn, resetUser } from '../../stores/actions'
import Button from '../components/button'
import { AuthMethod, AuthResult, TwitterProfile, FacebookProfile, GithubProfile } from '../../interfaces'

interface IHomeProps {
    fetchRooms: any
    setRooms: any
    rooms: any
    user: AuthResult
    resetUser: () => void
    signIn: (authMethod: AuthMethod) => void
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {

    const name = () => {
        if (!props.user) {
            return null
        }

        let profile
        switch (props.user.authCredential.providerId) {
            case 'twitter.com':
                profile = props.user.additionalUserInfo.profile as TwitterProfile
                break
            case 'facebook.com':
                profile = props.user.additionalUserInfo.profile as FacebookProfile
                break
            case 'github.com':
                profile = props.user.additionalUserInfo.profile as GithubProfile
                break
            default:
                return null
        }

        return <span>{profile.name}</span>
    }

    return (
        <div>
            <Link to="/room">Room</Link>
            {name()}
            <Button onClick={() => props.signIn(AuthMethod.Twitter)}>Twitterで登録</Button>
            <Button onClick={() => props.signIn(AuthMethod.Facebook)}>Facebookで登録</Button>
            <Button onClick={() => props.signIn(AuthMethod.Github)}>Githubで登録</Button>
            <Button onClick={props.resetUser}>サインアウト</Button>
        </div>
    )

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
    signIn,
    resetUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)