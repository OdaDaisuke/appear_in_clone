import { Action } from 'redux'
import initialState from '../initialState'

interface IRoomAction extends Action {
    rooms: any
}

const roomReducer = (state = initialState.room, action: IRoomAction) => {
    switch (action.type) {
        case 'SET_ROOMS':
            return {
                ...state,
                rooms: action.rooms,
            }
        default:
            return state
    }
}

export default roomReducer