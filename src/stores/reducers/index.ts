import { combineReducers } from 'redux'
import accountReducer from './account'
import roomReducer from './room'

const rootReducer = combineReducers({
    accountReducer,
    roomReducer,
})

export default rootReducer