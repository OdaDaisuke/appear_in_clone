import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledProfile = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-left: 5px;
background-color: #efefef;
`

const MenuProfile = (props: { imageUrl?: string} ) => {
    const imageUrl = props.imageUrl ? props.imageUrl : ""
    return (
        <Link to="/profile">
            <StyledProfile src={imageUrl} />
        </Link>
    )
}

export default MenuProfile