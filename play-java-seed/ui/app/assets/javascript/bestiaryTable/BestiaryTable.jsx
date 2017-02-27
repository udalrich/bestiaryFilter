import React from 'react';
import { BootstrapTable, TableHeaderColumn }  from 'react-bootstrap-table'

import 'whatwg-fetch'
import store from '../DataStore.jsx'
import ActionCreator from './ActionCreator.jsx'

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText + " at " + response.url);
    }
    return response;
}

fetch('/monsterData')
    .then(handleErrors)
    .then(resp => resp.json())
    .then(resp => { console.log('Got monster data, data', resp); return resp;})
    .then(json => store.dispatch(ActionCreator.setMonsterData(json)))
    .then(dummy => console.log('Got monster data, state', store.getState()))
    .catch(err => console.error("Error getting data", err))

function prettify(label) {
    return label.split(/([A-Z]+[^A-Z]*)/).
                 join(' ').
                 replace('_', ' ')

    /* split(/(?=[A-Z]+)/).
     *              join(' ').
     *              replace('_', ' ');*/
}

function buildColumns(headers) {
    console.log(`Mapping ${headers.length} columns`);
    return headers.
    map(label =>
        <TableHeaderColumn
            key={label}
            dataField={label}
            dataAlign="left"
            dataSort={true}
        >
            {prettify(label)}
        </TableHeaderColumn>)
    console.log('Returning dummy column');
    return (
        <TableHeaderColumn dataField="none" key="1">Waiting for data</TableHeaderColumn>
    );
}


export default ({state}) => {
    if (state.monsterData.data.length > 0) {
        return <BootstrapTable data={state.monsterData.data}
                               keyField="name"
                               pagination={true}
                               columnFilter={true}
                               defaultSortName="Name"
                               dataSort={true}
               >
            {
                buildColumns(state.monsterData.headers)
            }
        </BootstrapTable>
    } else {
        return ( <div>Waiting for data...</div> )
    }
};
