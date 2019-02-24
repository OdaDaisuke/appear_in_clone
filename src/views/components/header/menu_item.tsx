import * as React from 'react'
import styled from 'styled-components'
import MenuProfile from './menu_profile'

interface IMenuItemProps {
    label: string
    onClick: () => void
    withProfile?: boolean
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const StyledMenuItem = styled.li``

    return (
        <StyledMenuItem onClick={props.onClick}>
            {props.label}
            {props.withProfile ? <MenuProfile /> : null}
        </StyledMenuItem>
    )
}

export default MenuItem