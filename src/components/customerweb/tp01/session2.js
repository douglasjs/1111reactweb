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
        let introSubTitle1ImgText;
        let introSubTitle1Img;
        let introSubTitle2;
        let introSubTitle2Content;
        let introSubTitle2ImgText;
        let introSubTitle2Img;
        let introSubTitle3;
        let introSubTitle3Content;
        let introSubTitle3ImgText;
        let introSubTitle3Img;

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introTitle =  element.introTitle;
                introMainContent = element.introMainContent;
                introSubTitle1 = element.introSubTitle1;

                introSubTitle1Content = element.introSubTitle1Content;
                introSubTitle1ImgText =  element.introSubTitle1ImgText;
                introSubTitle1Img =  element.introSubTitle1Img;

                introSubTitle2 = element.introSubTitle2;
                introSubTitle2Content = element.introSubTitle2Content;
                introSubTitle2ImgText =  element.introSubTitle2ImgText;
                introSubTitle2Img =  element.introSubTitle2Img;

                introSubTitle3 = element.introSubTitle3;
                introSubTitle3Content = element.introSubTitle3Content;
                introSubTitle3ImgText =  element.introSubTitle3ImgText;
                introSubTitle3Img =  element.introSubTitle3Img;

            })
        }

        // image
        introSubTitle1Img = !introSubTitle1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
        introSubTitle2Img = !introSubTitle2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;
        introSubTitle3Img = !introSubTitle3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle3Img}`;

        return (
            <section id="company">
                {introductionData && introductionData.length > 0 &&
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column col-md-8 col-md-offset-2">
    
                            <header className="fancy-title fancy-title-1111 text-center">
    
                                <h2 className="mt-3 mb-3 tp01_line-1 tp01-title-font-size">{introTitle}</h2>
                                <h6 className="font-size-16 tp01_line-2 text-gray">{introMainContent}</h6>
    
                            </header>
    
                        </div>
                        <div className="lqd-column col-md-12">
    
                            <div className="tabs tabs-nav-side tabs-nav-side-alt tabs-nav-side-block flex-lg-row-reverse company_pb-50px-400">
    
                                <ul className="nav tabs-nav" role="tablist">
                                    <li role="presentation" className="active">
                                        <a href="#ld-tab-pane-48" aria-controls="ld-tab-pane-48" role="tab" data-toggle="tab">
                                            {introSubTitle1}
                                            <span className="company-hide-text">{introSubTitle1Content}</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#ld-tab-pane-49" aria-controls="ld-tab-pane-49" role="tab" data-toggle="tab">
                                            {introSubTitle2}
                                            <span className="company-hide-text">{introSubTitle2Content}</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#ld-tab-pane-50" aria-controls="ld-tab-pane-50" role="tab" data-toggle="tab">
                                             {introSubTitle3}
                                            <span className="company-hide-text">{introSubTitle3Content}</span>
                                        </a>
                                    </li>
                                </ul>
    
                                <div className="tabs-content company_height_300px_400-content">
    
                                    <div role="tabpanel" className="tabs-pane fade active in" id="ld-tab-pane-48">
    
                                        <div className="fancy-box fancy-box-case-study scheme-light company_height_300px_400" data-hover3d="true">
                                            <div className="fancy-box-contents border-radius-5" data-stacking-factor="0.5">
                                                <div className="cb-img-container border-radius-5">
                                                    <figure className="fancy-box-image border-radius-5 loaded" data-responsive-bg="true">
                                                        <img  src={introSubTitle1Img} alt="1111人力銀行公司介紹" />
                                                    </figure>
                                                </div>
                                                <div className="fancy-box-header">
                                                    <h3 className="tp01_line-1 text-left"> {introSubTitle1ImgText}</h3>
                                                </div>
                                            </div>
                                        </div>
        
                                    </div>
        
                                    <div role="tabpanel" className="tabs-pane fade" id="ld-tab-pane-49">
    
                                        <div className="fancy-box fancy-box-case-study scheme-light company_height_300px_400" data-hover3d="true">
                                            <div className="fancy-box-contents border-radius-5" data-stacking-factor="0.5">
                                                <div className="cb-img-container border-radius-5">
                                                    <figure className="fancy-box-image border-radius-5 loaded" data-responsive-bg="true">
                                                        <img  src={introSubTitle2Img}  alt="1111人力銀行公司介紹" />
                                                    </figure>
                                                </div>
                                                <div className="fancy-box-header">
                                                    <h3 className="tp01_line-1 text-left">{introSubTitle2ImgText}</h3>
                                                </div>
                                            </div>
                                        </div>
                                            
                                    </div>
            
                                    <div role="tabpanel" className="tabs-pane fade" id="ld-tab-pane-50">
    
                                        <div className="fancy-box fancy-box-case-study scheme-light company_height_300px_400" data-hover3d="true">
                                            <div className="fancy-box-contents border-radius-5" data-stacking-factor="0.5">
                                                <div className="cb-img-container border-radius-5">
                                                    <figure className="fancy-box-image border-radius-5 loaded" data-responsive-bg="true">
                                                        <img  src={introSubTitle3Img}   alt="1111人力銀行公司介紹" />
                                                    </figure>
                                                </div>
                                                <div className="fancy-box-header">
                                                    <h3 className="tp01_line-1 text-left">{introSubTitle3ImgText}</h3>
                                                </div>
                                            </div>
                                        </div>
                                                
                                    </div>
                
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