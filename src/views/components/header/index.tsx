import * as React from 'react'
import styled from 'styled-components'
import Menu from './menu'

const Header: React.FC = () => {
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

export default Header