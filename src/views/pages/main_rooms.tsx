import * as React from 'react'
import { connect } from 'react-redux'
import { fetchRooms, createRoom } from '../../stores/actions'
import Video from '../components/video'

interface IRoomsProps {
    fetchRooms: any
    createRoom: any
    rooms: any
    accessToken: string
}

class Rooms extends React.Component<IRoomsProps, any> {

    componentDidMount() {
        this.props.fetchRooms
    }

    render() {
        console.log(this.props.rooms)
        if (!this.props.rooms) {
            return <button onClick={() => this.props.createRoom(this.props.accessToken, "サンプルルーム")}>roomを作成</button>
        }

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

const mapStateToProps = state => {
    return {
        accessToken: state.accountReducer.accessToken,
        rooms: state.roomReducer.rooms,
    }
}

const mapDispatchToProps = {
    fetchRooms,
    createRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms)