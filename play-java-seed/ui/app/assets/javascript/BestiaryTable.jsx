import React from 'react';
import { BootstrapTable, TableHeaderColumn }  from 'react-bootstrap-table'

export default ({state}) => (
    <BootstrapTable data={state.monsters.monsterData}
                    keyField="name"
                    pagination={true}
                    columnFilter={true}
                    defaultSortName="Name"
                    dataSort={true}
    >
        <TableHeaderColumn dataField="Name"
                           dataAlign="left"
                           dataSort={true}
        >
            Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="CR"
                           dataAlign="right"
                           dataSort={true}
        >
            CR
        </TableHeaderColumn>
    </BootstrapTable>
);
