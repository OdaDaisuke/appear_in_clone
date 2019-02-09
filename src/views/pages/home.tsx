import * as React from 'react'
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
                <Video
                    width={800}
                    height={500}
                />
            </div>
        )
    }
}