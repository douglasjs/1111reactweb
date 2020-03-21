import React from 'react';
import CompanyTitle from './companytitle';
import CompanyInfo from './companyinfo';
import CompanyBenifit from './companybenifit';
import CompanyJobs from './companyjobs';
import CompanyBrand from './companybrand';
import CompanyCustomize from './companycustomize'
import CompanyQA from './companyqa'
import CompanyContact from './companycontact'
import TitleSet from '../../sharecomponents/titleset';
import envConfig from '../../../config/env';

class CustomerMain extends React.Component{


    
        constructor(props){
            super(props);
            this.state={};
        }

        componentDidMount(){
            const cid = this.props.match.params.cid;
            this.props.getDataList(cid);
        }

        render(){
            const { data } = this.props.datatableReducer;
            const cid = this.props.match.params.cid;


            let webTitle= '1111人力銀行-' + cid;
            let companyMeta = {
                keywords: '求職,求才,徵才,工作,找工作,求職網,人力銀行,幸福企業',
                description: '找工作送1萬元！前1,000名不必抽、人人有獎，1111推動幸福企業提供高薪、最好的福利等你來，找到工作立即送1萬元大紅包！速分享好友，他拿1萬元，你也有分享獎金1千元'
            }
            let styleSheet = [
                '/assets/tp02/css/demo-panel.min.css',
                '/assets/tp02/css/timeline.min.css',
                '/assets/tp02/css/slicknav.min.css',
                '/assets/tp02/css/settings.css',
                '/assets/tp02/css/nice-select.min.css',
                '/assets/tp02/css/lightslider.min.css',
                '/assets/tp02/css/magnific-popup.min.css',
                '/assets/tp02/css/leaflet.min.css',
                '/assets/tp02/css/justifiedGallery.min.css',
                '/assets/tp02/css/jquery-ui.min.css',
                '/assets/tp02/css/jquery.multiscroll.min.css',
                '/assets/tp02/css/jquery.mCustomScrollbar.min.css',
                '/assets/tp02/css/jquery.fullpage.min.css',
                '/assets/tp02/css/helper.min.css',
                '/assets/tp02/css/animate.min.css',
                '/assets/tp02/css/linea.min.css',
                '/assets/tp02/css/pe-icon-7-stroke.min.css',
                '/assets/tp02/css/font-awesome.min.css',
                '/assets/tp02/css/bootstrap.min.css',
                '/assets/tp02/css/style.min.purple.css',
                '/assets/tp02/css/topbutton.css'
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
                styleSheet[4] = `/assets/tp02/css/${data[0].styleType}`;
                logURL  =  `${envConfig.WebAPI}/image/${cid}?fileName=${data[0].logoImg}`;
                webURL = `https://1111.com.tw/brand/${cid}/${data[0].companyEName}`;
                styleType = data[0].styleType;
            }

            return (
                <div className="preloader-active">
                    <TitleSet title={webTitle} meta={companyMeta} style={styleSheet} logo={logURL} publicURL={webURL}/>
                    <CompanyTitle themeNum={themeNum} {...this.props}/>
                    <CompanyInfo themeNum={themeNum} {...this.props}/>
                    <CompanyInfoBrand themeNum={themeNum} {...this.props}/>
                    <CompanyBenifit themeNum={themeNum} {...this.props}/>
                    <CompanyJobs themeNum={themeNum} {...this.props}/>
                    <CompanyBrand themeNum={themeNum} {...this.props}/>
                    <CompanyCustomize themeNum={themeNum} {...this.props}/>
                    <CompanyQA themeNum={themeNum} {...this.props}/>
                    <CompanyContact themeNum={themeNum} email={email} {...this.props} />

                    <a className="top-link-icon show" id="js-top-icon"><i className="fa fa-angle-up"></i></a>
                    <a className="top-link show" href="https://www.1111.com.tw/corp/1355006/#c4" id="js-top">
                        <img src="assets/tp02/img/join_icon_purple.png" alt="立即應徵" />
                    </a>

                    <aside className="off-canvas-wrapper">
                        <div className="off-canvas-inner">
                            <div className="off-canvas-content">
                                <div className="off-canvas-header">
                                    <div className="logo-area">
                                        <a href="#"><img src="image/tp02/logo.png" alt="Logo" /></a>
                                    </div>
                                    <div className="close-action">
                                        <button className="btn-close"><i class="pe-7s-close"></i></button>
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
}

export default CustomerMain;