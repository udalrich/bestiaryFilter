import {
    applyMiddleware,
    combineReducers
} from 'redux'

import {
    combineForms,
    formReducer,
    modelReducer,
} from 'react-redux-form'

import { handleActions } from 'redux-actions'

const initState = {
    monsterData: []
}

const reducer = handleActions(
    {
        SET_MONSTER_DATA: (state, action) => ( {
            ...state,
            monsterData: action.payload
        })
    },
    initState);

export default reducer;




