import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRooms, createRoom } from '../../stores/actions'
import { any } from 'prop-types'
import styled from 'styled-components'

interface IRoomsProps {
    fetchRooms: any
    createRoom: any
    rooms: any
    accessToken: string
}

interface State {
    title: string
    rooms: any,
}

class RoomsPgae extends React.Component<IRoomsProps, State> {

    constructor(props: IRoomsProps) {
        super(props)
        this.state = {
            title: "",
            rooms: any,
        }
    }

    async componentDidMount() {
        await this.props.fetchRooms(this.props.accessToken)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.title} onChange={e => this.setState({ title: e.target.value }) }/>
                <button onClick={() => this.props.createRoom(this.props.accessToken, this.state.title)}>roomを作成</button>
                {this.rooms}
            </div>
        )
    }

    get rooms() {
        if (!this.props.rooms) {
            return null
        }

        let roomsEl = []
        const StyledUL = styled.ul`
            width: 90%;
            margin: 10px auto;
            list-style-type: none;
        `
        const StyledItem = styled.a`
        `

        for (let k in this.props.rooms) {
            const cur = this.props.rooms[k]
            roomsEl.push(
                <li key={k}>
                    <StyledItem href={`/rooms/${k}`}>{cur.title}</StyledItem>
                </li>
            )
        }

        return (
            <StyledUL>
                {roomsEl}
            </StyledUL>
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomsPgae)