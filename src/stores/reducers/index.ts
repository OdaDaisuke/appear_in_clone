import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, PersistConfig } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import accountReducer from './account'
import roomReducer from './room'

const rootReducer = combineReducers({
    accountReducer,
    roomReducer,
})

const persistConfig: PersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    version: 1,
    whitelist: [
        'accountReducer',
        'roomReducer',
        '_persist'
    ],
}

export default persistReducer(persistConfig, rootReducer)