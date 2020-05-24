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
        let introSubTitle1Img;        

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introTitle =  element.introTitle;
                introMainContent = element.introMainContent;
                introSubTitle1 = element.introSubTitle1;
                introSubTitle1Img =  element.introSubTitle1Img;
            })
        }

        // image
        introSubTitle1Img = !introSubTitle1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
        
        return (
            <div id="company" className="about about-business-modern">
                
                {introductionData && introductionData.length > 0 &&

                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="about-business-item bg-img" data-bg="../../../image/tp03/bg-1-company.jpg">
                                <div className="about-content">
                                    <div className="section-title mb-0">

                                        <div className="about-txt mt-md-20 mt-sm-20">
                                            <img src={introSubTitle1Img} alt="1111人力銀行公司介紹" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-business-item bg-brand">
                                <div className="about-content">
                                    <div className="section-title mb-0">
                                        <h5 className="text-left">{introSubTitle1}</h5>
                                        <h4 className="text-white text-left">{introTitle}</h4>
        
                                        <div className="about-txt mt-0 mt-md-20 mt-sm-20">
                                            <p>{introMainContent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                }

            </div>
        )

    }
}

export default CompanyInfo;