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
        let benefitSubTitle1;
        let benefitSubTitle2;
        let benefitSubTitle3;
        let benefitSubContent1;
        let benefitSubContent2;
        let benefitSubContent3;

        if(benefitData && benefitData.length > 0){
            benefitData.forEach(element => {
				benefitContent =  element.benefitContent;
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
			
			<section id="benefit" className="vc_row bg-athens-gray pt-25">
				{benefitData && benefitData.length > 0 &&
					<div className="container">
						<div className="row">

							<div className="lqd-column col-lg-6 col-md-6">
								<header className="fancy-title mb-35">
									<h2 className="mt-0 mb-2 pr-md-5 text-left tp06-title-font-size">員工福利</h2>
									<p>{benefitContent}</p>
								</header>
							</div>
							
							<div className="lqd-column col-lg-6 col-md-6">

								<div className="testimonial testimonial-quote-filled text-left testimonial-details-lg testimonial-quote-shadowed">
									
									<div className="testimonial-quote">
										<blockquote>
											<img src={benefitImg} alt="1111員工福利" />
										</blockquote>
									</div>
									
								</div>

							</div>
						</div>

						<div className="row">

							<div className="lqd-column col-md-4">

								<div className="iconbox text-left iconbox-shadow-hover iconbox-xl iconbox-heading-sm iconbox-filled iconbox-filled-hover border-athens-gray border-radius-3">
									<div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container">
											<i className="icon-basic_laptop"></i>
										</span>
									</div>
									<div className="contents tp06_benefit-mheight-137">
										<h3 className="font-weight-normal">{benefitSubTitle1}</h3>
										<p>{benefitSubContent1}</p>
									</div>
								</div>

							</div>

							<div className="lqd-column col-md-4">

								<div className="iconbox text-left iconbox-shadow-hover iconbox-xl iconbox-heading-sm iconbox-filled iconbox-filled-hover border-athens-gray border-radius-3">
									
									<div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container">
											<i className="icon-basic_globe"></i>
										</span>
									</div>
									<div className="contents tp06_benefit-mheight-137">
										<h3 className="font-weight-normal">{benefitSubTitle2}</h3>
										<p>{benefitSubContent2}</p>
									</div>
								</div>

							</div>

							<div className="lqd-column col-md-4">

								<div className="iconbox text-left iconbox-shadow-hover iconbox-xl iconbox-heading-sm iconbox-filled iconbox-filled-hover border-athens-gray border-radius-3">
									<div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container">
											<i className="icon-ecommerce_bag_plus"></i>
										</span>
									</div>
									<div className="contents tp06_benefit-mheight-137">
										<h3 className="font-weight-normal">{benefitSubTitle3}</h3>
										<p>{benefitSubContent3}</p>
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