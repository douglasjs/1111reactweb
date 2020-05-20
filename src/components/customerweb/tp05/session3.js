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
        
        let benefitContent;
        let benefitImg;
        let benefitImg2;
        let benefitSubTitle1;
        let benefitSubTitle2;
        let benefitSubTitle3;
        let benefitSubTitle4;
        let benefitSubTitle5;
        let benefitSubTitle6;
        let benefitSubContent1;
        let benefitSubContent2;
        let benefitSubContent3;
        let benefitSubContent4;
        let benefitSubContent5;
        let benefitSubContent6;
        let benefitSubImg1;

        if(benefitData && benefitData.length > 0){
            benefitData.forEach(element => {
                benefitContent =  element.benefitContent;
                benefitImg = element.benefitImg;                
                benefitImg2 = element.benefitImg2;
                benefitSubTitle1 = element.benefitSubTitle1;
                benefitSubTitle2 = element.benefitSubTitle2;
                benefitSubTitle3 = element.benefitSubTitle3;
                benefitSubTitle4 = element.benefitSubTitle4;
                benefitSubTitle5 = element.benefitSubTitle5;
                benefitSubTitle6 = element.benefitSubTitle6;
                benefitSubContent1 = element.benefitSubContent1;
                benefitSubContent2 = element.benefitSubContent2;
                benefitSubContent3 = element.benefitSubContent3;
                benefitSubContent4 = element.benefitSubContent4;
                benefitSubContent5 = element.benefitSubContent5;
                benefitSubContent6 = element.benefitSubContent6;
                benefitSubImg1 = element.benefitSubImg1;
            })
        }

        // image
        benefitImg = !benefitImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        benefitImg2 = !benefitImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg2}`;
        benefitSubImg1 = !benefitSubImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg1}`;

        let benefitBgURL = "url(" + benefitSubImg1 + ")";

        return (
            <section  className="why-choose-us-area">
                {benefitData && benefitData.length > 0 &&
                <div id="benefit" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="why-choose-us-slides owl-carousel owl-theme">
                                <div className="why-choose-us-image bg1">
                                    <img src={benefitImg} alt="員工福利" />
                                </div>

                                <div className="why-choose-us-image bg2">
                                    <img src={benefitImg2} alt="員工福利" />
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="why-choose-us-content text-left" style={{backgroundImage: benefitBgURL}}>
                                <div className="content">
                                    <div className="title">
                                        <span className="sub-title">Your Benefits</span>
                                        <h2>好 福 利</h2>
                                        <p>{benefitContent}</p>
                                    </div>

                                    <ul className="features-list">

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-like"></i>
                                            </div>
                                            <span>{benefitSubTitle1}</span>
                                            {benefitSubContent1}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <span>{benefitSubTitle2}</span>
                                            {benefitSubContent2}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-care"></i>
                                            </div>
                                            <span>{benefitSubTitle3}</span>
                                            {benefitSubContent3}
                                            
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-team"></i>
                                            </div>
                                            <span>{benefitSubTitle4}</span>
                                            {benefitSubContent4}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-policy pl-10" ></i>
                                            </div>
                                            <span>{benefitSubTitle5}</span>
                                            {benefitSubContent5}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-education"></i>
                                            </div>
                                            <span>{benefitSubTitle6}</span>
                                            {benefitSubContent6}                                            
                                        </li>

                                    </ul>
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

export default CompanyBenifit;