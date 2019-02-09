import { Action } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, PersistConfig } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import initialState from '../initialState'

interface IAccountAction extends Action {
    accessToken: string
}

const accountReducer = (state = initialState.account, action: IAccountAction) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return action.accessToken
        default:
            return state
    }
}

const persistConfig: PersistConfig = {
    key: 'accountReducer',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: [''],
}

export default persistReducer(persistConfig, accountReducer)