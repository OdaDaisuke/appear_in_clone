import { Action } from 'redux'

interface IAccountAction extends Action {
    accessToken: string
}

const accountReducer = (state = {}, action: IAccountAction) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return action.accessToken
        default:
            return state
    }
}

export default accountReducer