import { Action } from 'redux'
import initialState from '../initialState'
import { Room } from '../../interfaces'

interface IRoomAction extends Action {
    rooms: Array<Room>
    room: Room
    curRoomId: number
}

const roomReducer = (state = initialState.room, action: IRoomAction) => {
    switch (action.type) {
        case 'SET_ROOMS':
            return {
                ...state,
                rooms: action.rooms,
            }
        case 'SET_ROOM':
            return {
                ...state,
                rooms: [...state.rooms, action.room ]
            }
        case 'ENTER_ROOM':
            return {
                ...state,
                curRoomId: action.curRoomId,
            }
        case 'EXIT_ROOM':
        case 'FINISH_VIDEO_CHAT':
            return {
                ...state,
                curRoomID: initialState.curRoomID,
            }
        default:
            return state
    }
}

export default roomReducer