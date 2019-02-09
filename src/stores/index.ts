import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from './reducers'

const persistConfig: PersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const reducer = persistReducer(persistConfig, rootReducer)
const middlewares = applyMiddleware(thunk)

const store = createStore(reducer, middlewares)
const persister = persistStore(store)

export { store, persister }