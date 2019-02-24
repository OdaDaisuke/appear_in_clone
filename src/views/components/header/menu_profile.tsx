import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledProfile = styled.img`
width: 38px;
height: 38px;
border-radius: 50%;
margin: 5px 0;
border: 1px solid #f1f1f1;
`

interface Props {
    name: string
    profileImageUrl: string
}

const MenuProfile = (props: Props ) => {
    const imageUrl = props.profileImageUrl ? props.profileImageUrl : "/assets/images/profile_default.png"
    return (
        <Link to="/profile">
            <StyledProfile src={imageUrl} />
        </Link>
    )
}

export default MenuProfile