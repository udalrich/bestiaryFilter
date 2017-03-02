import {
    createStore,
    combineReducers,
    applyMiddleware
} from  'redux'
import thunk from 'redux-thunk'
import monsters from './bestiaryTable/reducer.jsx'
import selectColumns from './selectColumns/reducer.jsx'

export default createStore(
    combineReducers({
        monsters,
        selectColumnForm: selectColumns
    }),
    applyMiddleware(thunk));
