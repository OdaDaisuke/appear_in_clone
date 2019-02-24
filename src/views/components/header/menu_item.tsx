import * as React from 'react'
import styled from 'styled-components'
import MenuProfile from './menu_profile'

interface IMenuItemProps {
    label: string
    onClick: () => void
    profile: {
        name: string
        profileImageUrl: string
    }
    withProfile?: boolean
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const StyledMenuItem = styled.li`
    font-size: 0.92em;
    display: inline-block;
    cursor: pointer;
    transition: all .2s;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        background-color: #efefef;
    }
    `

    return (
        <StyledMenuItem onClick={props.onClick}>
            {!props.withProfile && props.label}
            {props.withProfile ? <MenuProfile {...props.profile} /> : null}
        </StyledMenuItem>
    )
}

export default MenuItem