import React from 'react';
import TitleSet from '../sharecomponents/titleset';
import useScript from '../sharecomponents/usescript';
import ManagerSlideBar from './managerSlideBar';
import ManagerContentMainToolbar from './managerContentMainToolbar';
import ManagerContentFoot from './managerContentFoot';
import ManagerScollToTop from './managerScrollToTop';
import ManagerModal from './managerModal';

  
const withManagerWeb = Componet => props => {
    const cid = props.match.params.cid;
    const companyName = '1111人力銀行-永豐餘生技' + cid;
    const companyMeta = {
        keywords: '1111,永豐餘生技,人力,徵才',
        description: '永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。&nbsp;1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。'
    }
    const styleSheet = [
        '/assetsBK/vendor/fontawesome-free/css/all.min.css',
        'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i',
        '/assetsBK/css/sb-admin-2.min.css'
    ]
    
    useScript('/assetsBK/vendor/jquery/jquery.min.js');
    useScript('/assetsBK/vendor/bootstrap/js/bootstrap.bundle.min.js');
    useScript('/assetsBK/js/sb-admin-2.min.js');
    useScript('/assetsBK/vendor/chart.js/Chart.min.js');
    
    return (
        <div id="page-top">
            <div id="wrapper">

                <TitleSet title={companyName} meta={companyMeta} style={styleSheet} />
                <ManagerSlideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <ManagerContentMainToolbar />
                        <Componet {...props}/>
                    </div>
                    <ManagerContentFoot />
                </div>
                <ManagerScollToTop />
                <ManagerModal />

            </div>
        </div>
    )

}

export default withManagerWeb;
