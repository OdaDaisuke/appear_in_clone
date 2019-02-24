import * as React from 'react'
import { connect } from 'react-redux'
import { setAccessToken, setRooms, fetchRooms, signIn, resetUser } from '../../stores/actions'
import Video from '../components/video'

interface IRoomsProps {
}

class Rooms extends React.Component<IRoomsProps, any> {

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

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms)