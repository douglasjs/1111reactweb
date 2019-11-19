import React from 'react';
import ManagerContentMainToolbar from './managerContentMainToolbar';
import ManagerContentMainContainer from './managerContentMainContainer'

function ManagerContentMain(props) {

    return (
        <div id="content">
            <ManagerContentMainToolbar />
            <ManagerContentMainContainer />
        </div>
    )
}

export default ManagerContentMain;