import React from 'react';
import ManagerContentMain from './managerContentMain';
import ManagerContentFoot from './managerContentFoot';

function ManagerContent(props) {

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <ManagerContentMain />
            <ManagerContentFoot />
        </div>
        
    )

}

export default ManagerContent;