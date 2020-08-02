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

        let benefitImgURL = "url(" + benefitImg + ")";
        let benefitImg2URL = "url(" + benefitImg2 + ")";
        let benefitBgURL = "url(" + benefitSubImg1 + ")";
        //alert("左1" + benefitImg + "*左2" + benefitImg2 + "右" + benefitSubImg1);

        return (
            <section  className="why-choose-us-area">
                {benefitData && benefitData.length > 0 &&
                <div id="benefit" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="why-choose-us-slides owl-carousel owl-theme">
                                <div className="why-choose-us-image" style={{backgroundImage: benefitImgURL}}>
                                    <img src={benefitImg} alt="員工福利" />
                                </div>

                                <div className="why-choose-us-image" style={{backgroundImage: benefitImg2URL}}>
                                    <img src={benefitImg2} alt="員工福利" />
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="why-choose-us-content text-left" style={{backgroundImage: benefitBgURL}}>
                                <div className="content">
                                    <div className="title">
                                        <span className="sub-title text-white">Your Benefits</span>
                                        <h2>好 福 利</h2>
                                        <p className="tp05_line-1">{benefitContent}</p>
                                    </div>

                                    <ul className="features-list">

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-like tp05_benefit_icon_w_full"></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle1}</span>
                                            {benefitSubContent1}
                                        </li>

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-customer-service tp05_benefit_icon_w_full"></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle2}</span>
                                            {benefitSubContent2}
                                        </li>

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-care tp05_benefit_icon_w_full"></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle3}</span>
                                            {benefitSubContent3}
                                            
                                        </li>

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-team tp05_benefit_icon_w_full"></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle4}</span>
                                            {benefitSubContent4}
                                        </li>

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-policy pl-10 tp05_benefit_icon_w_full" ></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle5}</span>
                                            {benefitSubContent5}
                                        </li>

                                        <li className="tp05_line-2">
                                            <div className="icon tp05_benefit_icon_wh_60">
                                                <i className="flaticon-education tp05_benefit_icon_w_full"></i>
                                            </div>
                                            <span className="tp05_line-1">{benefitSubTitle6}</span>
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