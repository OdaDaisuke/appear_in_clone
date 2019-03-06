import * as React from 'react'
import { connect } from 'react-redux'

interface IRoomsProps {
    rooms: any
    accessToken: string
    roomId: string
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
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.room.id}
                {this.room.title}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)