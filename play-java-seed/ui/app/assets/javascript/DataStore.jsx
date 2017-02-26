import {
    createStore,
    combineReducers,
    applyMiddleware
} from  'redux'
import thunk from 'redux-thunk'
import monsters from './reducer.jsx'

export default createStore(
    combineReducers({
        monsters
    }),
    applyMiddleware(thunk));
