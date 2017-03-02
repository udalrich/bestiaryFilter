import {
    applyMiddleware,
    combineReducers
} from 'redux'

import {
    combineForms,
    formReducer,
    modelReducer,
} from 'react-redux-form'


const initState = {
    Name: true,
    Size: true,
    CR: true,
    Type: true
}

const reducer = combineForms({
    selectColumns: initState
},
'selectColumnForm');

export default reducer;




