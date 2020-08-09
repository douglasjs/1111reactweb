import React from 'react';
import envConfig from '../../../config/env';

class CompanyInfo extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getintroductionList(cid, this.props.themeNum);
    }

    render() {
        const cid = this.props.match.params.cid;
        const { introductionData } = this.props.introductionReducer;

        let introTitle;
        let introMainContent;
        let introSubTitle1;
        let introSubTitle1Content;        
        let introSubTitle1Img;
        let introSubTitle2;
        let introSubTitle2Content;        
        let introSubTitle2Img;
        let introSubTitle3;
        let introSubTitle3Content;        
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introTitle =  element.introTitle;
                introMainContent = element.introMainContent;

                introSubTitle1 = element.introSubTitle1;
                introSubTitle1Content = element.introSubTitle1Content;                
                introSubTitle1Img =  element.introSubTitle1Img;

                introSubTitle2 = element.introSubTitle2;
                introSubTitle2Content = element.introSubTitle2Content;                
                introSubTitle2Img =  element.introSubTitle2Img;

                introSubTitle3 = element.introSubTitle3;
                introSubTitle3Content = element.introSubTitle3Content;
            })
        }

        // image
        introSubTitle1Img = !introSubTitle1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
        introSubTitle2Img = !introSubTitle2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;

        return (
            <section className="about-area ptb-100 bg-f8f8f8">
                {introductionData && introductionData.length > 0 &&
                <div id="company" className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 hide-xs">
                            <div className="about-image text-left tp05-img-display">
                                <img src={introSubTitle1Img} alt="公司介紹" />
                                <img src={introSubTitle2Img} alt="公司介紹" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 text-left">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2 className="tp05_line-1">{introTitle}</h2>
                                <p className="text-left tp05_line-9">{introMainContent}</p>
                                <a target="_blank"  rel="noopener noreferrer" href={companyurl} className="default-btn tp05_hover-btn">我要應徵</a>
                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area text-justify">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="about-text-box">
                                    <h3>{introSubTitle1}</h3>
                                    <p>{introSubTitle1Content}</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="about-text-box">
                                    <h3>{introSubTitle2}</h3>
                                    <p>{introSubTitle2Content}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 offset-lg-0 offset-md-0 offset-sm-3 col-sm-6">
                                <div className="about-text-box">
                                    <h3>{introSubTitle3}</h3>
                                    <p>{introSubTitle3Content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </section>
        )

    }
}

export default CompanyInfo;