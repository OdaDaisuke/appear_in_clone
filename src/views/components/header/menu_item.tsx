import * as React from 'react'
import styled from 'styled-components'

interface IMenuItemProps {
    label: string
    onClick: () => void
}

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
    const StyledMenuItem = styled.li`
    `

    return (
        <StyledMenuItem onClick={props.onClick}>{props.label}</StyledMenuItem>
    )
}

export default MenuItem