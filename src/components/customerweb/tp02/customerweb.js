import React from 'react';
import TitleSet from '../sharecomponents/titleset';
import useScript from '../sharecomponents/usescript';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';

function CustomerWeb(props) {
    const cid = props.match.params.cid;
    const companyName = '1111人力銀行-';
    const companyMeta = {
        keywords: '1111,永豐餘生技,人力,徵才',
        description: '永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。&nbsp;1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。'
    }
    const styleSheet = [
        'assets/vendors/liquid-icon/liquid-icon.min.css',
        'assets/vendors/font-awesome/css/font-awesome.min.css',
        'assets/css/theme-vendors.min.css',
        'assets/css/theme.min.css',
        'assets/css/style_blue.css'
    ]
    const script = ['assets/vendors/modernizr.min.js'];

    useScript('assets/vendors/jquery.min.js');
    useScript('assets/js/theme-vendors.js');
    useScript('assets/js/theme.min.js');
    useScript('assets/js/liquidAjaxContactForm.min.js');
    useScript('assets/js/liquidAjaxMailchimp.min.js');
    useScript('assets/js/goTopButton.js');

    return (
         
        <div>
            <TitleSet title={companyName} meta={companyMeta} style={styleSheet} script={script} />
            <div id="wrap">
                <CustomerHeader />
                <CustomerMain />
                <CustomerFoot />
            </div>
            <a className="top-link-icon hide" href="##" id="js-top-icon"><i className="fa fa-angle-up"></i></a>
            <a className="top-link hide" href="##" id="js-top">
                <img src="assets/img/join_icon_blue.png" alt="立即應徵" />
            </a>
        </div>    
    )

}

export default CustomerWeb;