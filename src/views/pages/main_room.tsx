import * as React from 'react'
import Video from '../components/video'
import CommunicationService from '../../service/communication'

interface IRoomProps {
}

export default class Room extends React.Component<IRoomProps, any> {

    render() {
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