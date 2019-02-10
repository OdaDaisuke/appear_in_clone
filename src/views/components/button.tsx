import * as React from 'react'
import styled from 'styled-components'

interface IButtonProps {
    onClick: () => void
    children?: React.ReactNode
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const StyledButton = styled.button`
        border: none;
        border-radius: 2px;
        padding: 12px 36px;
        display: block;
        cursor: pointer;
    `

    return (
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    )
}

export default Button