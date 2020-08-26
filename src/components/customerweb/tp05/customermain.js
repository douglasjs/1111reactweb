﻿import React from 'react';
import CompanyTitle from './session1';
import CompanyInfo from './session2';
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
                '/assets/tp05/css/bootstrap.min.css',
                '/assets/tp05/css/animate.min.css',
                '/assets/tp05/css/fontawesome.min.css',
                '/assets/tp05/css/flaticon.css',
                '/assets/tp05/css/owl.carousel.min.css',
                '/assets/tp05/css/slick.min.css',
                '/assets/tp05/css/meanmenu.css',
                '/assets/tp05/css/magnific-popup.min.css',
                '/assets/tp05/css/odometer.min.css',
                '/assets/tp05/css/nice-select.min.css',
                '/assets/tp05/css/blue.css',
                '/assets/tp05/css/responsive.css',
                '/assets/tp05/css/topbutton.css'
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
                styleSheet[10] = `/assets/tp05/css/${data[0].styleType}`;
                logURL  =  `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
                webURL = `https://1111.com.tw/brand/${cid}/${data[0].companyEName}`;
                styleType = data[0].styleType;
                goButtonURL = `https://www.1111.com.tw/corp/${cid}/#c4`
            }

            return (
                <div>
                    <TitleSet title={webTitle} meta={companyMeta} style={styleSheet} logo={logURL} publicURL={webURL}/>
                    <CompanyTitle themeNum={themeNum} {...props}/>
                    <CompanyInfo themeNum={themeNum} {...props}/>
                    <CompanyBenifit themeNum={themeNum} {...props}/>
                    <CompanyJobs themeNum={themeNum} {...props}/>                    
                    <CompanyBrand themeNum={themeNum} {...props}/>
                    <CompanyCustomize themeNum={themeNum} {...props}/>
                    <CompanyQA themeNum={themeNum} {...props}/>
                    <CompanyContact themeNum={themeNum} email={email} {...props} />

                    <a className="top-link-icon show" id="js-top-icon" href="/#"><i className="fa fa-angle-up"></i></a>
                    <a className="top-link show" href={goButtonURL} id="js-top" target='_blank' rel='noopener noreferrer'>
                        <img src={`/assets/tp05/img/join_icon_${styleType}.png`} alt="立即應徵" />
                    </a>

                </div>
            )
}

export default CustomerMain;