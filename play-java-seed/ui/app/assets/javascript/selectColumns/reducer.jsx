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
    AC: true,
    CR: false
}

const reducer = combineForms({
    selectColums: initState
});

export default reducer;




