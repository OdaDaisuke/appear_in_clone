import { Action } from 'redux'
import initialState from '../initialState'
import { AuthResult } from '../../interfaces'

interface IAccountAction extends Action {
    accessToken: string
    user: AuthResult
}

const accountReducer = (state = initialState.account, action: IAccountAction) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {
                ...state,
                accessToken: action.accessToken,
            }
        case 'SET_USER':
            const authCredential = action.user.authCredential as any
            return {
                ...state,
                user: action.user,
                accessToken: authCredential.accessToken
            }
        case 'RESET_USER':
            return {
                ...state,
                user: initialState.account.user,
            }
        case 'SIGNOUT':
            return {
                ...state,
                user: initialState.account.user,
            }
        default:
            return state
    }
}

export default accountReducer