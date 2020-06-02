import React from 'react';
import envConfig from '../../../config/env';

const NavBar = (props) => {
    return(
        <div className="col">
            <div className="navbar-header">
                <a className="navbar-brand" href={props.logoURL} rel="home">
                    <span className="navbar-brand-inner">
                        <img className="logo-dark" src={props.logURL} alt="1111人力銀行" />
                        <img className="logo-sticky" src={props.logURL} alt="1111人力銀行" />
                        <img className="mobile-logo-default" src={props.logURL} alt="1111人力銀行" />
                        <img className="logo-default" src={props.logURL} alt="1111人力銀行" />
                    </span>
                </a>
                <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile" data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false" data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </span>
                </button>
            </div>
        </div>

    );
};

const NavMain = (props) => {
    const menuList = [
        { name: '公司介紹', link: '#company', enable: true },
        { name: '員工福利', link: '#benefit', enable: true },
        { name: '職缺介紹', link: '#jobs', enable: true },
        { name: '品牌介紹', link: '#brand', enable: true },
        { name: props.customizeName, link: '#custom', enable: props.customizeEnable },
        { name: '常見問題', link: '#faq', enable: props.qaEnable },
        { name: '聯絡我們', link: '#contact', enable: props.contactEnable }
    ]
    return (

        <div className="col">
                        
            <div className="collapse navbar-collapse" id="main-header-collapse">
        
                <ul id="primary-nav" className="main-nav nav align-items-lg-stretch justify-content-lg-end" data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'>
            
                    {menuList.map((item, index) => {
                        return item.enable &&
                            <li key={index}>
                                <a href={item.link} data-localscroll="true" data-localscroll-options='{ "offsetElements": "[data-sticky-header] .mainbar-wrap, parent" }'>
                                    <span className="link-icon"></span>
                                    <span className="link-txt">
                                        <span className="link-ext"></span>
                                        <span className="txt">
                                            {item.name}
                                            <span className="submenu-expander">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                    })}
                                                                                
                </ul>
        
            </div>

        </div>
        
    )
}


function CustomerHeader(props) {

    
    const { customizeData } = props.customizeReducer;
    const { qaData } = props.qaReducer;
    const { contactData} = props.contactReducer;
    const { data } = props.datatableReducer;
    const cid = props.match.params.cid;
    let logURL = "/image/logo.png";
    let logoURL = "https://1111.com.tw";

    if(data && data.length > 0){
        logURL = `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
        logoURL = `https://www.1111.com.tw/corp/${cid}/`;
    }

    let customizeEnable;
    let customizeName;
    if(customizeData && customizeData.length > 0){
        customizeData.forEach(element => {
            customizeEnable =  element.customizeEnable;
            customizeName = element.customizeName;
        })
    }

    let qaEnable;
    if(qaData && qaData.length > 0){
        qaData.forEach(element => {
            qaEnable =  element.qaEnable;
        })
    }

    let contactEnable;
    if(contactData && contactData.length > 0){
        contactData.forEach(element => {
            contactEnable =  element.contactEnable;
        })
    }

    return (

        <header className="main-header main-header-overlay" data-sticky-header="true" data-sticky-options='{ "stickyTrigger": "first-section" }'>
                
            <div className="mainbar-wrap">
                <div className="container mainbar-container">
                    <div className="mainbar">
                        <div className="row mainbar-row align-items-lg-stretch px-4">
                            
                            <NavBar logURL={logURL} logoURL={logoURL}/>
                            
                            <NavMain customizeEnable={customizeEnable} customizeName={customizeName} qaEnable={qaEnable} contactEnable={contactEnable} />
                            
                        </div>
                    </div>
                </div>
            </div>

        </header>
                
    );


}



export default CustomerHeader;