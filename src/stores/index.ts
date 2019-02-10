import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

const middlewares = applyMiddleware(thunk)

const store = createStore(rootReducer, middlewares)
const persister = persistStore(store)

export { store, persister }