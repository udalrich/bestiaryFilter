import React from 'react'
import ReactDom from 'react-dom'

import BestiaryTable from './BestiaryTable.jsx'
import DataStore from './DataStore.jsx'

const Page = () => (
    <BestiaryTable state={DataStore.getState()} />
);

ReactDom.render(<Page />,
                document.getElementById("main"));
