import React from 'react'

import { Provider } from 'react-redux'
import {
    Control,
    Form
} from 'react-redux-form'
import prettify from '../bestiaryTable/prettify.jsx'

const ColumnSelect = ({monsters, store}) => (
    <Provider store={store}>
        <Form model="selectColumns">
            {monsters.monsterData.headers.map(header => (
                 <label key={header}
                        className="selectColumn">
                     <Control.checkbox model={"." + header} />
                     {prettify(header)}
                 </label>
             ))}
        </Form>
    </Provider>
)

ColumnSelect.propTypes = {
    monsters: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
}

export default ColumnSelect;

