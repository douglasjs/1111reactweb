import React from 'react';
import envConfig from '../../../config/env';

const NavBar = () => {
    return(
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
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

        <div className="navbar-collapse collapse clearfix">
            <ul className="navigation clearfix">
                {menuList.map((item, index) => {
                let liclass = "dropdown"
                if (item.name === "公司介紹") {liclass = "current dropdown"}
                
                return item.enable &&
                    <li key={index} className={liclass}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                })}
            </ul>
        </div>

    )
}


function CustomerHeader(props) {

    
    const { customizeData } = props.customizeReducer;
    const { data } = props.datatableReducer;
    const cid = props.match.params.cid;
    let logURL ="/image/tp03/logo.png";

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
        
        <header className="main-header">
            <div className="outer-container">
                <div className="main-box clearfix">
                    <div className="logo-box">
                        <figure className="logo"><a href="/#"><img src="image/tp03/logo.png" alt="1111人力銀行" /></a></figure>
                    </div>
                    <div className="nav-outer clearfix">
                        <div className="menu-area">
                            <nav className="main-menu navbar-expand-lg">
                                <NavBar logURL={logURL}/>
                                <NavMain customizeEnable={customizeEnable}  customizeName={customizeName}/>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="sticky-header">
                <div className="container clearfix">
                    <figure className="logo-box"><a href="/#"><img src="image/tp03/small-logo.png" alt="1111人力銀行" /></a></figure>
                    <div className="menu-area">
                        <nav className="main-menu navbar-expand-lg">
                            <NavBar logURL={logURL}/>
                            <NavMain customizeEnable={customizeEnable}  customizeName={customizeName}/>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
                
    );


}



export default CustomerHeader;