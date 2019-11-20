import React from 'react';

/*
import CustomerHeader from '../customerweb/customerheader';
import CustomerMain from '../customerweb/customermain';
import CustomerFoot from '../customerweb/customerfoot';
import TitleSet from '../sharecomponents/titleset';
*/

function ManagerContentMainContainer(props) {

    /*
    const companyName = '1111人力銀行-永豐餘生技';
    const companyMeta = {
        keywords: '1111,永豐餘生技,人力,徵才',
        description: '永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。&nbsp;1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。'
    }
    const styleSheet = [
        '/assets/vendors/liquid-icon/liquid-icon.min.css',
        '/assets/vendors/font-awesome/css/font-awesome.min.css',
        '/assets/css/theme-vendors.min.css',
        '/assets/css/theme.min.css',
        '/assets/css/style_blue.css'
    ]
    const script = ['/assets/vendors/modernizr.min.js'];
    */
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">客製化網站系統使用說明</h1>
            <p className="mb-4"> 使用客製化網站系統可以快速建置人力需求網站，簡易迅速，詳見使用手冊</p>
            <div>
                <a target="_blank" href="./#">使用手冊</a>
            </div>
            
            {/*<TitleSet title={companyName} meta={companyMeta} style={styleSheet} script={script} />
            <CustomerHeader />
            <CustomerMain />
            <CustomerFoot />
            <CustomerWeb cid="123" /> */}
        </div>
    )

}

export default ManagerContentMainContainer;