import * as React from 'react'
import { connect } from 'react-redux'
import ServiceFactory from '../../service/factory'
import { enterRoom } from '../../stores/actions'
import CommunicationService from '../../service/communication';

interface IRoomsProps {
    rooms: any
    accessToken: string
    roomId: string
    enterRoom: (curRoomId) => void
}

interface State {
    title: string
    rooms: any,
}

class RoomPage extends React.Component<IRoomsProps, State> {
    room: any

    constructor(props: IRoomsProps) {
        super(props)
        this.room = this.props.rooms[this.props.roomId]
        const serviceFactory = new ServiceFactory()
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.room.id}
                {this.room.title}
                <button onClick={() => this.props.enterRoom(this.room.id)}>roomに入る</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accessToken: state.accountReducer.accessToken,
        rooms: state.roomReducer.rooms,
    }
}

const mapDispatchToProps = {
    enterRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)