﻿import React  from 'react';
import TitleSet from '../sharecomponents/titleset';
import ManagerSlideBar from './managerSlideBar';
import ManagerContentMainToolbar from './managerContentMainToolbar';
import ManagerContentFoot from './managerContentFoot';
import ManagerScollToTop from './managerScrollToTop';
import ManagerModal from './managerModal';
import ManagerFoot from './managerFoot';
//import useScript from '../sharecomponents/usescript';

const withManagerWeb = Componet => props => {

    const URL = ['/assetsBK/vendor/jquery/jquery.min.js'];
    //useScript(URL);
    let companyName = '1111人力銀行';
    let companyMeta = {
        keywords: '1111,人力,徵才',
        description: '1111人力銀行'
    }
    const styleSheet = [
        '/assetsBK/vendor/fontawesome-free/css/all.min.css',
        'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i',
        '/assetsBK/css/sb-admin-2.min.css'
    ]



    return (
        <div id="page-top">
            <TitleSet title={companyName} meta={companyMeta} style={styleSheet} script={URL} />
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
