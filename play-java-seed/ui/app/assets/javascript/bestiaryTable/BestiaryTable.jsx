import React from 'react';
import { BootstrapTable, TableHeaderColumn }  from 'react-bootstrap-table'

import 'whatwg-fetch'
import store from '../DataStore.jsx'
import ActionCreator from './ActionCreator.jsx'
import {
    Button,
    Popover,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap'
import prettify from './prettify.jsx'

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



function dataFormat(cell, row, extraData, rowIdx) {
    if (cell.startsWith("<link")) {
        return ( {cell} )
    } else if (cell.length > 100) {
        // console.log('row', row, rowIdx);
        // A probably unique id
        const id = row.Name + cell.length;
        const popover = (
            <Popover title="Full Content"
                     id={'pop-' + id}>
                {cell}
            </Popover>
        )
        /* const tooltip = (
         *     <Tooltip id={'tt' + id}>
         *         {cell}
         *     </Tooltip>
         * )*/
        return (
            <OverlayTrigger trigger="click"
                            id={'over-' + id}
                            rootClose
                            placement="bottom"
                            overlay={popover}
            >
                <span>{cell.substring(0, 100)}<Button>...</Button></span>
            </OverlayTrigger>
        )
    } else {
        return cell;
    }

}

function buildColumns(headers, selectedColumns) {
    console.log(`Mapping ${headers.length} columns`);
    console.log('selectedColumns', selectedColumns);

    return headers
        .filter(label => selectedColumns[label])
        .map(label =>
            <TableHeaderColumn
                key={label}
                dataField={label}
                dataAlign="left"
                dataFormat={dataFormat}
                dataSort={true}
            >
                {prettify(label)}
            </TableHeaderColumn>)
    console.log('Returning dummy column');
    return (
        <TableHeaderColumn dataField="none" key="1">Waiting for data</TableHeaderColumn>
    );
}


const BestiaryTable = ({state, selectedColumns}) => {
    console.log('state', state);
    console.log('selectedColumns', selectedColumns);
    if (state.monsterData.data.length > 0) {
        return <BootstrapTable data={state.monsterData.data}
                               keyField="name"
                               pagination={true}
                               columnFilter={true}
                               defaultSortName="Name"
                               dataSort={true}
               >
            {
                buildColumns(state.monsterData.headers,
                             selectedColumns)
            }
        </BootstrapTable>
    } else {
        return ( <div>Waiting for data...</div> )
    }
};

BestiaryTable.propTypes = {
    state: React.PropTypes.object.isRequired,
    selectedColumns:  React.PropTypes.object.isRequired
}

export default BestiaryTable;
