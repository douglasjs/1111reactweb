import React from 'react';
import envConfig from '../../../config/env';

class CompanyBenifit  extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getbenefitList(cid, this.props.themeNum);
    }

    render(){
        const { benefitData } = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();
        
        let benefitImg;
        let benefitSubTitle1;
        let benefitSubTitle2;
        let benefitSubTitle3;
        let benefitSubContent1;
        let benefitSubContent2;
        let benefitSubContent3;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c3";

        if(benefitData && benefitData.length > 0){
            benefitData.forEach(element => {
                benefitImg = element.benefitImg;  
                benefitSubTitle1 = element.benefitSubTitle1;
                benefitSubTitle2 = element.benefitSubTitle2;
                benefitSubTitle3 = element.benefitSubTitle3;
                benefitSubContent1 = element.benefitSubContent1;
                benefitSubContent2 = element.benefitSubContent2;
                benefitSubContent3 = element.benefitSubContent3;
            })
        }

        // image
        benefitImg = !benefitImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;

        return (
            <section id="benefit" className="service-section feature-style-five">

                {benefitData && benefitData.length > 0 && <div>

                <div className="anim-icon">
                    <div className="icon icon-1 rotate-me"></div>
                    <div className="icon icon-2"></div>
                    <div className="icon icon-3 float-bob-x"></div>
                </div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box clearfix beneft_text-align">
                                <figure className="image image-1">
                                    <img src={benefitImg} alt="1111人力銀行-員工福利" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 benefit-text content-column text-left">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h4>BENEFIT</h4>
                                    <h1>員工福利</h1>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item benefit_min-hight">
                                        <div className="icon-box"><i className="flaticon-digital-marketing"></i></div>
                                        <h3><a target="_blank" rel="noopener noreferrer" href={companyurl}>{benefitSubTitle1}</a></h3>
                                        <div className="text">{benefitSubContent1}</div>
                                    </div>
                                    <div className="single-item benefit_min-hight">
                                        <div className="icon-box"><i className="flaticon-data"></i></div>
                                        <h3><a target="_blank" rel="noopener noreferrer" href={companyurl}>{benefitSubTitle2}</a></h3>
                                        <div className="text">{benefitSubContent2}</div>
                                    </div>
                                    <div className="single-item benefit_min-hight">
                                        <div className="icon-box"><i className="flaticon-dashboard"></i></div>
                                        <h3><a target="_blank" rel="noopener noreferrer" href={companyurl}>{benefitSubTitle3}</a></h3>
                                        <div className="text">{benefitSubContent3}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                </div>}
                
            </section>
        )

    }
}

export default CompanyBenifit;