import * as React from 'react'
import styled from 'styled-components'
import MenuItem from './menu_item'

interface Props {
    name: string
    profileImageUrl: string
}

const Menu: React.FC<Props> = (props) => {
    const StyledMenu = styled.ul`
        font-size: 0.938em;
        font-weight: bold;
        letter-spacing: 1px;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;
        max-width: 1145px;
    `

    return (
        <StyledMenu>
            <MenuItem
                label="アカウント"
                onClick={null}
                withProfile
                profile={props}
            />
        </StyledMenu>
    )
}

export default Menu