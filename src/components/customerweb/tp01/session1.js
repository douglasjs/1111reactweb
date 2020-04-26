import React from 'react';
import envConfig from '../../../config/env';

class CompanyTitle extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

   componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getCompanyList(cid, this.props.themeNum? this.props.themeNum: 'tp01');
    }

    render(){
        const cid = this.props.match.params.cid;
        const { companyData } = this.props.companyReducer;
        console.log(companyData);

        let title;
        let companySubTitle1;
        let companySubTitle2;
        let companyBackgroundImg1;
        let companyBackgroundImg2;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
                title =  element.title;
                companySubTitle1 = element.companySubTitle1;
                companySubTitle2 = element.companySubTitle2;
                companyBackgroundImg1 = element.companyBackgroundImg1;
                companyBackgroundImg2 =  element.companyBackgroundImg2;
            })
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        companyBackgroundImg2 = !companyBackgroundImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;
        const imageData = `{"delay":3000,"effect":"scale","imageArray":["${companyBackgroundImg1}","${companyBackgroundImg2}"]}`;

        return (
            <section>
            <div
                className="vc_row height-60 d-flex flex-wrap align-items-end"
                data-parallax="true"
                data-parallax-options='{"parallaxBG":true}'
                data-slideshow-bg="true"
                data-slideshow-options={imageData}
            >
                
    
                <span className="row-bg-loader">
                    <span className="row-bg-loader-inner"></span>
                </span>
    
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column col-md-10 col-md-offset-1 text-center py-7" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":31,"translateZ":-108,"opacity":0},"animations":{"translateY":0,"translateZ":0,"opacity":1}}'>
    
                            <header className="fancy-title">
                                 <h6 className="text-white lh-15 mb-4"><span className="font-size-3-3x lh-1 font-weight-bold text-shodow line-1">{title}</span></h6>
    
                                <div className="row">
                                    <div className="lqd-column col-md-8 col-md-offset-2">
    
                                         <p className="text-white text-shodow font-size-24 mb-1 line-2">{companySubTitle1}</p>
    
                                    </div>
                                </div>
    
                                <h6 className="text-uppercase font-weight-bold ltr-sp-2 text-white text-shodow mb-5 line-1">{companySubTitle2}</h6>
    
                            </header>
    
                            <a href={companyurl} target='_blank' rel="noopener noreferrer" className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-primary mb-2" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
                                <span>
                                    <span className="btn-txt">我要應徵</span>
                                </span>
                            </a>
    
                        </div>
    
                    </div>
                </div>
            
            </div>
            </section>   
        )
    }
}

export default CompanyTitle;