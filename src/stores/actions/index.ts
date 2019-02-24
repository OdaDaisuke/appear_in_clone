import ServiceFactory from '../../service/factory'
import { AuthMethod, AuthResult } from '../../interfaces'
import RouteController from '../../routes/controller'

const serviceFactory = new ServiceFactory()
const accountService = serviceFactory.accountService
new RouteController(serviceFactory.accountService)

export const setAccessToken = accessToken => {
    return {
        type: 'SET_ACCESS_TOKEN',
        accessToken,
    }
}

export const setRooms = rooms => {
    return {
        type: 'SET_ROOMS',
        rooms,
    }
}

export const setUser = (user: AuthResult) => {
    accountService.setToken(user.authCredential.providerId)

    return {
        type: 'SET_USER',
        user,
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER',
    }
}

/*------ Async actions ------*/

export const fetchRooms = () => {
    return dispatch => {
        serviceFactory.communicationService.fetchRooms().then( rooms => {
            dispatch(setRooms(rooms))
        })
    };
}

export const signIn = (authMethod: AuthMethod) => {
    return dispatch => {
        serviceFactory.accountService.signin(authMethod).then(res => {
            const user: AuthResult = {
                additionalUserInfo: res.additionalUserInfo,
                authCredential: res.credential,
            }
            dispatch(setUser(user))
        })
    }
}