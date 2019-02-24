import * as React from 'react'
import styled from 'styled-components'
import MenuItem from './menu_item'

const Menu: React.FC = () => {
    const StyledMenu = styled.ul`
        font-size: 0.938em;
        font-weight: bold;
        letter-spacing: 1px;
    `

    return (
        <StyledMenu>
            <MenuItem label="アカウント" onClick={null} withProfile />
        </StyledMenu>
    )
}

export default Menu