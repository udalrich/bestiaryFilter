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

}

const reducer = combineForms({
    selectColums: initState
});

export default reducer;




