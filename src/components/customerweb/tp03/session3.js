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
        let benefitSubTitle4;
        let benefitSubContent1;
        let benefitSubContent2;
        let benefitSubContent3;
        let benefitSubContent4;
        let benefitSubImg1;
        let benefitSubImg2;
        let benefitSubImg3;
        let benefitSubImg4;

        if(benefitData && benefitData.length > 0){
            benefitData.forEach(element => {
                benefitImg = element.benefitImg; 
                benefitSubTitle1 = element.benefitSubTitle1;
                benefitSubTitle2 = element.benefitSubTitle2;
                benefitSubTitle3 = element.benefitSubTitle3;
                benefitSubTitle4 = element.benefitSubTitle4;
                benefitSubContent1 = element.benefitSubContent1;
                benefitSubContent2 = element.benefitSubContent2;
                benefitSubContent3 = element.benefitSubContent3;
                benefitSubContent4 = element.benefitSubContent4;
                benefitSubImg1 = element.benefitSubImg1;
                benefitSubImg2 = element.benefitSubImg2;
                benefitSubImg3 = element.benefitSubImg3;
                benefitSubImg4 = element.benefitSubImg4;
            })
        }

        // image
        benefitImg = !benefitImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        benefitSubImg1 = !benefitSubImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg1}`;
        benefitSubImg2 = !benefitSubImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg2}`;
        benefitSubImg3 = !benefitSubImg3 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg3}`;
        benefitSubImg4 = !benefitSubImg4 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg4}`;

        return (
            <div id="benefit" className="service-area sm-top-custom bg-softWhite">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 order-1 order-lg-0">
                            <div className="service-inner-wrap service-business-classic">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="icon-box-item text-left">
                                            <div className="icon-box__icon">
                                                <img src={benefitSubImg1} alt="福利" />
                                            </div>
                                            <div className="icon-box__txt">
                                                <h6>{benefitSubTitle1}</h6>
                                                <p>{benefitSubContent1}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="icon-box-item text-left">
                                            <div className="icon-box__icon">
                                                <img src={benefitSubImg2} alt="福利" />
                                            </div>
                                            <div className="icon-box__txt">
                                                <h6>{benefitSubTitle2}</h6>
                                                <p>{benefitSubContent2}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="icon-box-item text-left">
                                            <div className="icon-box__icon">
                                            <img src={benefitSubImg3} alt="福利" />
                                            </div>
                                            <div className="icon-box__txt">
                                                <h6>{benefitSubTitle3}</h6>
                                                <p>{benefitSubContent3}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="icon-box-item text-left">
                                            <div className="icon-box__icon">
                                                <img src={benefitSubImg4} alt="福利" />
                                            </div>
                                            <div className="icon-box__txt">
                                                <h6>{benefitSubTitle4}</h6>
                                                <p>{benefitSubContent4}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 order-0 order-lg-1">
                            <figure className="about-thumb about-thumb-right-align">
                                <img src={benefitImg} alt="1111人力銀行員工福利" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default CompanyBenifit;