import React from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import ActionCreators from './ActionCreators.jsx'

console.log('actions', ActionCreators);

const CollapsingPanel = ({state: { expanded },
                          children,
                          header,
                          dispatch,
                          ...rest}) => (
    <Panel collapsible
           expanded={expanded}
           header={header}
           onSelect={ (e, key) => dispatch(ActionCreators.toggleExpanded(e)) }
           {...rest}
    >
        {children}
    </Panel>
)

CollapsingPanel.propTypes = {
    state: React.PropTypes.object.isRequired,
    // TODO: allow elements as well
    header: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired
}

export default connect()(CollapsingPanel);
