import React from 'react'
import ReactDom from 'react-dom'
import {
    Panel
} from 'react-bootstrap'
import BestiaryTable from './bestiaryTable/BestiaryTable.jsx'
import ColumnSelect from './selectColumns/ColumnSelect.jsx'
import CollapsingPanel from './collapsingPanel/CollapsingPanel.jsx'

import DataStore from './DataStore.jsx'
import { Provider } from 'react-redux'

const Page = ({state }) => {
    console.log('state', state);
    return (
        <Panel>
            <CollapsingPanel header="Select Columns"
                             state={state.collapsingPanel}
                             >
                <ColumnSelect monsters={state.monsters}
                              store={DataStore} />
            </CollapsingPanel>
            <BestiaryTable state={state.monsters}
                           selectedColumns={state.selectColumnForm.selectColumns}
            />
        </Panel>
    );
}

Page.propTypes = {
    state: React.PropTypes.object.isRequired,
}

const render = () => ReactDom.render(
    <Provider store={DataStore}>
        <Page state={DataStore.getState()} />
    </Provider>,
    document.getElementById("main"));

DataStore.subscribe(render);
//render();
