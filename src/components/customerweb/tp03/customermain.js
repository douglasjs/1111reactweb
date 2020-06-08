﻿import React from 'react';
import CompanyTitle from './session1';
import CompanyInfo from './session2';
import CompanyInfoBrand from './session2_1';
import CompanyBenifit from './session3';
import CompanyJobs from './session4';
import CompanyBrand from './session5';
import CompanyCustomize from './session6'
import CompanyQA from './session7'
import CompanyContact from './session8'
import TitleSet from '../../sharecomponents/titleset';
import envConfig from '../../../config/env';

function CustomerMain(props){

            const { data } = props.datatableReducer;
            const cid = props.match.params.cid;


            let webTitle= '1111人力銀行-' + cid;
            let companyMeta = {
                keywords: '求職,求才,徵才,工作,找工作,求職網,人力銀行,幸福企業',
                description: '找工作送1萬元！前1,000名不必抽、人人有獎，1111推動幸福企業提供高薪、最好的福利等你來，找到工作立即送1萬元大紅包！速分享好友，他拿1萬元，你也有分享獎金1千元'
            }
            let styleSheet = [
                'https://fonts.googleapis.com/css?family=Karla:400,400i,700',
                'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i',
                '/assets/tp03/css/demo-panel.min.css',
                '/assets/tp03/css/timeline.min.css',
                '/assets/tp03/css/slicknav.min.css',
                '/assets/tp03/css/settings.css',
                '/assets/tp03/css/nice-select.min.css',
                '/assets/tp03/css/lightslider.min.css',
                '/assets/tp03/css/magnific-popup.min.css',
                '/assets/tp03/css/leaflet.min.css',
                '/assets/tp03/css/justifiedGallery.min.css',
                '/assets/tp03/css/jquery-ui.min.css',
                '/assets/tp03/css/jquery.multiscroll.min.css',
                '/assets/tp03/css/jquery.mCustomScrollbar.min.css',
                '/assets/tp03/css/jquery.fullpage.min.css',
                '/assets/tp03/css/helper.min.css',
                '/assets/tp03/css/animate.min.css',
                '/assets/tp03/css/linea.min.css',
                '/assets/tp03/css/pe-icon-7-stroke.min.css',
                '/assets/tp03/css/font-awesome.min.css',
                '/assets/tp03/css/bootstrap.min.css',
                '/assets/tp03/css/blue.css',
                '/assets/tp03/css/topbutton.css',
                '/assets/tp03/css/line.css'               
            ]
            let email;
            let themeNum;
            let logURL = "/image/logo-1111.png";
            let webURL = "https://1111.com.tw";
            let styleType ="blue.css";
            let goButtonURL = "https://1111.com.tw";

            if(data && data.length > 0){
                webTitle = data[0].title;
                email = data[0].email;
                themeNum =  data[0].themeNum;
                companyMeta = { ...companyMeta,
                    keywords: data[0].keyword,
                    description: data[0].description
                }
                styleSheet[21] = `/assets/tp03/css/${data[0].styleType}`;
                logURL  =  `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
                webURL = `https://1111.com.tw/brand/${cid}/${data[0].companyEName}`;
                styleType = data[0].styleType;
                goButtonURL = `https://www.1111.com.tw/corp/${cid}/`
            }

            return (
                <div className="preloader-active">
                    <TitleSet title={webTitle} meta={companyMeta} style={styleSheet} logo={logURL} publicURL={webURL}/>
                    <CompanyTitle themeNum={themeNum} {...props}/>
                    <CompanyInfo themeNum={themeNum} {...props}/>
                    <CompanyInfoBrand themeNum={themeNum} {...props}/>
                    <CompanyBenifit themeNum={themeNum} {...props}/>
                    <CompanyJobs themeNum={themeNum} {...props}/>
                    <CompanyBrand themeNum={themeNum} {...props}/>
                    <CompanyCustomize themeNum={themeNum} {...props}/>
                    <CompanyQA themeNum={themeNum} {...props}/>
                    <CompanyContact themeNum={themeNum} email={email} {...props} />

                    <a className="top-link-icon show" id="js-top-icon" href="/#"><i className="fa fa-angle-up"></i></a>
                    <a className="top-link show" href={goButtonURL} id="js-top" target='_blank' rel='noopener noreferrer'>
                        <img src={`/assets/tp03/img/join_icon_${styleType}.png`} alt="立即應徵" />
                    </a>

                    <aside className="off-canvas-wrapper">
                        <div className="off-canvas-inner">
                            <div className="off-canvas-content">
                                <div className="off-canvas-header">
                                    <div className="logo-area">
                                        <a href="/#"><img src="image/tp03/logo.png" alt="Logo" /></a>
                                    </div>
                                    <div className="close-action">
                                        <button className="btn-close"><i className="pe-7s-close"></i></button>
                                    </div>
                                </div>

                                <div className="off-canvas-item">
                                    <div className="res-mobile-menu">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            )
}

export default CustomerMain;