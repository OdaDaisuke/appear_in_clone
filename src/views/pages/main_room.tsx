import * as React from 'react'
import Video from '../components/video'
import CommunicationService from '../../service/communication'

interface IRoomProps {
    communicationService: CommunicationService
}

export default class Room extends React.Component<IRoomProps, any> {

    render() {
        this.props.communicationService
        return (
            <div>
                <Video
                    width={800}
                    height={500}
                />
            </div>
        )
    }
}