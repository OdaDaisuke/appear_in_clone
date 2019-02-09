import * as React from 'react'
import { Link } from 'react-router-dom'
import Video from '../components/video'
import CommunicationService from '../../service/communication'

interface IHomeProps {
    communicationService: CommunicationService
}

export default class Home extends React.Component<IHomeProps, any> {

    render() {
        this.props.communicationService
        return (
            <div>
                <Link to="/room">Room</Link>
            </div>
        )
    }
}