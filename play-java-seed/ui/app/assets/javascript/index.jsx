import React from 'react'
import ReactDom from 'react-dom'

import BestiaryTable from './BestiaryTable.jsx'
import DataStore from './DataStore.jsx'

const Page = ({state}) => (
    <BestiaryTable state={state.monsters} />
);

const render = () => ReactDom.render(<Page state={DataStore.getState()} />,
                                     document.getElementById("main"));

DataStore.subscribe(render);
render();
