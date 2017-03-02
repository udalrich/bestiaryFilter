import React from 'react'
import ReactDom from 'react-dom'
import {
    Panel
} from 'react-bootstrap'
import BestiaryTable from './bestiaryTable/BestiaryTable.jsx'
import ColumnSelect from './selectColumns/ColumnSelect.jsx'

import DataStore from './DataStore.jsx'

const Page = ({state }) => {
    console.log('state', state);
    return (
        <Panel>
            <ColumnSelect monsters={state.monsters}
                          store={DataStore} />
            <BestiaryTable state={state.monsters}
                           selectedColumns={state.selectColumnForm.selectColumns}
            />
        </Panel>
    );
}

Page.propTypes = {
    state: React.PropTypes.object.isRequired,
}

const render = () => ReactDom.render(<Page state={DataStore.getState()} />,
                                     document.getElementById("main"));

DataStore.subscribe(render);
render();
