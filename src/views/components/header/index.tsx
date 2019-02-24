import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Menu from './menu'
import { AuthResult } from '../../../interfaces'

interface HeaderProps { 
    user: AuthResult
}

class Header extends React.Component<HeaderProps, any> {
    render() {
        const StyledHeader = styled.header`
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(20,20,20,0.82);
            width: 100%;
        `

        return (
            <StyledHeader>
                <Menu />
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