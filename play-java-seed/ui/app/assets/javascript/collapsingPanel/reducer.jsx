

import { handleActions } from 'redux-actions'

const initState = {
    expanded: false
}

const reducer = handleActions(
    {
        TOGGLE_EXPANDED: (state, action) => ( {
            ...state,
            expanded: !state.expanded
        })
    },
    initState);

export default reducer;




