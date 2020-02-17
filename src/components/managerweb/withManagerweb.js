import React  from 'react';
import ManagerSlideBar from './managerSlideBar';
import ManagerContentMainToolbar from './managerContentMainToolbar';
import ManagerContentFoot from './managerContentFoot';
import ManagerScollToTop from './managerScrollToTop';
import ManagerModal from './managerModal';
import ManagerFoot from './managerFoot';
import useScript from '../sharecomponents/usescript';

const withManagerWeb = Componet => props => {

    const URL = ['/assetsBK/vendor/jquery/jquery.min.js'];
    useScript(URL);
    
    return (
        <div id="page-top">
            <div id="wrapper">
                <ManagerSlideBar {...props}/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <ManagerContentMainToolbar  {...props}/>
                        <Componet {...props}/>
                    </div>
                    <ManagerContentFoot />
                </div>
                <ManagerScollToTop />
                <ManagerModal />

            </div>
            <ManagerFoot />
        </div>
    )

}

export default withManagerWeb;
