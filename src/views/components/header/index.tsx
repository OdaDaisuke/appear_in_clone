import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 4%;
            padding-right: 4%;
        `

        const StyledLink = styled.a`
            height: 100%;
            display: block;
            flex: 0 1 50px;
            text-decoration: none;
            color: #3f3f4f;
            font-weight: bold;
            letter-spacing: 2px;
        `

        const profile = this.props.user.additionalUserInfo.profile as TwitterProfile

        return (
            <StyledHeader>
                <StyledLink href="/" ><span>AIC</span></StyledLink>
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