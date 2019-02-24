import * as React from 'react'
import { connect } from 'react-redux'
import { AuthResult, AuthMethod } from '../../interfaces'
import Button from '../components/button'
import { signIn } from '../../stores/actions'

interface Props {
    user: AuthResult
    signIn: (authMethod: AuthMethod) => void
}

class Signup extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.signIn(AuthMethod.Twitter)}>Twitterで登録</Button>
                <Button onClick={() => this.props.signIn(AuthMethod.Facebook)}>Facebookで登録</Button>
                <Button onClick={() => this.props.signIn(AuthMethod.Github)}>Githubで登録</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.accountReducer.user,
    }
}

const mapDispatchToProps = {
    signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)