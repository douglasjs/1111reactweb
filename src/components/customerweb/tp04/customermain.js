import React from 'react';
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
                'https://fonts.googleapis.com/css?family=Poppins:400,700',
                '/assets/tp04/vendors/liquid-icon/liquid-icon.min.css',
                '/assets/tp04/vendors/font-awesome/css/font-awesome.min.css',
                '/assets/tp04/css/theme-vendors.min.css',
                '/assets/tp04/css/theme.min.css',
                '/assets/tp04/css/creative.css'
            ]
            let email;
            let themeNum;
            let logURL = "/image/logo-1111.png";
            let webURL = "https://1111.com.tw";
            let styleType ="blue.css";

            if(data && data.length > 0){
                webTitle = data[0].title;
                email = data[0].email;
                themeNum =  data[0].themeNum;
                companyMeta = { ...companyMeta,
                    keywords: data[0].keyword,
                    description: data[0].description
                }
                styleSheet[6] = `/assets/tp04/css/${data[0].styleType}`;
                logURL  =  `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
                webURL = `https://1111.com.tw/brand/${cid}/${data[0].companyEName}`;
                styleType = data[0].styleType;
            }

            return (
                <main>

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
                    <a className="top-link show" href="https://www.1111.com.tw/corp/51395296/#c4" id="js-top" target='_blank' rel='noopener noreferrer'>
                        <img src={`/assets/tp04/img/join_icon_${styleType}.png`} alt="立即應徵" />
                    </a>

                </main>
            )
}

export default CustomerMain;