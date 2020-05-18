import React from 'react';
import envConfig from '../../../config/env';

const NavBar = (props) => {
    return(
        <div className="pearo-responsive-nav">
            <div className="container">
                <div className="pearo-responsive-menu">
                    <div className="logo">
                        <a href="/#">
                            <img src={props.logURL} alt="logo" />
                        </a>
                    </div>
                </div>
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

        <div className="pearo-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="/#">
                        <img src={props.logURL} alt="logo" />
                    </a>

                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item hidden-md-down"><div className="top-header-logo align-items-center mtb-17">
                                    <a href="/#">
                                        <img src={props.logURL} alt="logo" />
                                    </a>
                                </div>
                            </li>
                            {menuList.map((item, index) => {
                                return item.enable &&
                                    <li className="nav-item" key={index}><a className="nav-link" href={item.link}>{item.name}</a></li>
                            })}
                        </ul>                    
                    </div>
                </nav>
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
    let logURL ="/image/logo-1111.png";

    if(data && data.length > 0){
        logURL = `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
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

        <header className="header-area header-style-three">

            <div className="navbar-area">

                <NavBar logURL={logURL}/>
                <NavMain logURL={logURL} customizeEnable={customizeEnable} customizeName={customizeName} qaEnable={qaEnable} contactEnable={contactEnable} />
                
            </div>

        </header>
                
    );


}



export default CustomerHeader;