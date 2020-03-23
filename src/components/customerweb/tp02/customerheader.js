import React from 'react';
import envConfig from '../../../config/env';

const NavBar = () => {
    return(
        <div className="preloader-wrap">
            <div className="preloader">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

    );
};

const NavMain = () => {
    const menuList = [
        { name: '公司介紹', link: '#company', enable: true },
        { name: '員工福利', link: '#benefit', enable: true },
        { name: '職缺介紹', link: '#jobs', enable: true },
        { name: '品牌介紹', link: '#brand', enable: true },
        { name: '自訂標籤', link: '#custom', enable: true },
        { name: '常見問題', link: '#faq', enable: true },
        { name: '聯絡我們', link: '#contact', enable: true }
    ]
    return (
        <header className="header-area-custom header-area sticky-header">
            <div className="container-fluid">
                <div className="row no-gutters align-items-center">
                    <div className="col-5 col-lg-2">
                        <div className="header-logo-area">
                            <a href="\#">
                                <img className="logo-main" src="image/tp02/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9 d-none d-lg-block">
                        <div className="header-navigation-area">
                            <ul className="main-menu nav justify-content-center">
                            {menuList.map((item, index) => {
                                return item.enable &&
                                    <li  key={index} className="full-width">
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-7 col-lg-1">
                            <div className="header-action-area text-right">
                                <button className="btn-menu d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </header>
        
    )
}


function CustomerHeader(props) {

    
    const { customizeData } = props.customizeReducer;
    const { data } = props.datatableReducer;
    const cid = props.match.params.cid;
    let logURL ="/image/tp02/logo.png";

    if(data && data.length > 0){
        logURL  =  `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
    }

    let customizeEnable;
    let customizeName;
    if(customizeData && customizeData.length > 0){
        customizeData.forEach(element => {
            customizeEnable =  element.customizeEnable;
            customizeName = element.customizeName;
        })
    }

    return (
    

    <header className="main-header main-header-overlay" data-react-to-megamenu="true" data-sticky-header="true" data-sticky-options='{ "stickyTrigger": "first-section" }'>
        <div className="mainbar-wrap">
        <span className="megamenu-hover-bg"></span>
        <div className="container-fluid mainbar-container">
            <div className="mainbar">
                <div className="row mainbar-row align-items-lg-stretch px-4">
                    <div className="col-auto">
                        <NavBar logURL={logURL}/>
                        <NavMain customizeEnable={customizeEnable}  customizeName={customizeName}/>
                    </div>
                </div>
            </div>
        </div>
        </div>               	
    </header> 
    );


}



export default CustomerHeader;