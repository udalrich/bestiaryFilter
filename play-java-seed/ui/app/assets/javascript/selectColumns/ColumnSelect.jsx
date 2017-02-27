import React from 'react'

import { Provider } from 'react-redux'

const ColumnSelect = ({monsters, store}) => (
    <Provider store={store}>
        <div>Column selection goes here</div>
    </Provider>
)

ColumnSelect.propTypes = {
    monsters: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
}

export default ColumnSelect;

