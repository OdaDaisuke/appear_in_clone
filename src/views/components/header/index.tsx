import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Menu from './menu'
import { AuthResult, TwitterProfile } from '../../../interfaces'

interface HeaderProps { 
    user: AuthResult
}

class Header extends React.Component<HeaderProps, any> {
    render() {
        const StyledHeader = styled.header`
            background-color: #fff;
            box-shadow: 0 1px 10px -1px rgba(20, 20, 20, .28);
            width: 100%;
        `

        const profile = this.props.user.additionalUserInfo.profile as TwitterProfile

        return (
            <StyledHeader>
                <Menu
                    name={this.props.user.additionalUserInfo.username}
                    profileImageUrl={profile.profile_image_url}
                />
            </StyledHeader>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.accountReducer.user,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)