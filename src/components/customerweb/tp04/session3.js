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
		benefitSubImg1 = !benefitSubImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg1}`;
		benefitSubImg2 = !benefitSubImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg2}`;
		benefitSubImg3 = !benefitSubImg3 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg3}`;
		benefitSubImg4 = !benefitSubImg4 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg4}`;

		return (
			
			<section id="benefit" className="vc_row pt-10 pb-10">
				
				{benefitData && benefitData.length > 0 &&
				
				<div className="container">
					
					<div className="row">

						<div className="lqd-column col-md-10 col-md-offset-1">

							<header className="fancy-title text-center mb-30" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

								<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">Employee Benefit</h6>
								<h2 className="mt-1 mb-2">員工福利</h2>

							</header>

						</div>

					</div>

					<div className="row" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"180","initValues":{"scale":0.8,"opacity":0},"animations":{"scale":1,"opacity":1}}'>

						<div className="lqd-column col-md-6 tp04-S3_min-h-252">

							<div className="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled" id="ld_icon_box_5c4e9c4475e68">
								<div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container">
										<img src={benefitSubImg1} alt="福利" />
									</span>
								</div>
								<div className="contents">
									<h3 className="mb-2">{benefitSubTitle1}</h3>
									<p>{benefitSubContent1}</p>
								</div>
							</div>

						</div>

						<div className="lqd-column col-md-6 tp04-S3_min-h-252">

							<div className="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled" id="ld_icon_box_5c4e9c4475e69">
								<div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container">
										<img src={benefitSubImg2} alt="福利" />
									</span>
								</div>
								<div className="contents">
									<h3 className="mb-2">{benefitSubTitle2}</h3>
									<p>{benefitSubContent2}</p>
								</div>
							</div>

						</div>

						<div className="lqd-column col-md-6 tp04-S3_min-h-252">

							<div className="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled" id="ld_icon_box_5c4e9c4475e70">
								<div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container">
										<img src={benefitSubImg3} alt="福利" />
									</span>
								</div>
								<div className="contents">
									<h3 className="mb-2">{benefitSubTitle3}</h3>
									<p>{benefitSubContent3}</p>
								</div>
							</div>

						</div>

						<div className="lqd-column col-md-6 tp04-S3_min-h-252">

							<div className="iconbox iconbox-side iconbox-semiround iconbox-shadow iconbox-heading-sm iconbox-filled" id="ld_icon_box_5c4e9c4475e71">
								<div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container">
										<img src={benefitSubImg4} alt="福利" />
									</span>
								</div>
								<div className="contents">
									<h3 className="mb-2">{benefitSubTitle4}</h3>
									<p>{benefitSubContent4}</p>
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