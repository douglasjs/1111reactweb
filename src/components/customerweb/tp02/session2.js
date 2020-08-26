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
        let introSubTitle2Content; 
        let introSubTitle3Content;        
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introTitle = element.introTitle;
                introMainContent = element.introMainContent;
                introSubTitle1 = element.introSubTitle1;
                introSubTitle1Img = element.introSubTitle1Img;
                introSubTitle1Content = element.introSubTitle1Content;
                introSubTitle2Content = element.introSubTitle2Content;
                introSubTitle3Content = element.introSubTitle3Content;
            })
        }

        // image
        introSubTitle1Img = !introSubTitle1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;

        let imgURL = "url(/images/background/about-bg.png)";

        return (
            <section id="company" className="about-section" style={{backgroundImage: imgURL}}>

                {introductionData && introductionData.length > 0 &&

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column text-left">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>{introSubTitle1}</h4>
                                    <h1>{introTitle}</h1>
                                </div>
                                <div className="text">{introMainContent}</div>
                                <ul className="list">
                                    <li className="tp02_company_sub">{introSubTitle1Content}</li>
                                    <li className="tp02_company_sub">{introSubTitle2Content}</li>
                                    <li className="tp02_company_sub">{introSubTitle3Content}</li>
                                </ul>
                                <div className="btn-box">
                                    <a className="btn-style-three" target="_blank" rel="noopener noreferrer" href={companyurl}>立即應徵</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image paroller clearfix">
                                    <img src={introSubTitle1Img} alt="1111人力銀行-公司介紹" />
                                </figure>
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