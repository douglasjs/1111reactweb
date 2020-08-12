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
        let introSubTitle1Img;       
		let introSubTitle2Img;
		let introSubTitle3Img;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introTitle =  element.introTitle;
				introMainContent = element.introMainContent;
				          
                introSubTitle1Img =  element.introSubTitle1Img;
				introSubTitle2Img =  element.introSubTitle2Img;
				introSubTitle3Img =  element.introSubTitle3Img;
            })
        }

        // image
        introSubTitle1Img = !introSubTitle1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
		introSubTitle2Img = !introSubTitle2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;
		introSubTitle3Img = !introSubTitle3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle3Img}`;

		return (
			
			<section id="company" className="vc_row pt-10 pb-10">

				{introductionData && introductionData.length > 0 &&
				
				<div className="container">
					<div className="row d-flex flex-wrap align-items-center">

						<div className="lqd-column col-md-offset-3 col-md-4 col-lg-4 col-lg-offset-3 hidden-xs hidden-sm">

							<div className="lqd-parallax-team-members">

								<div className="liquid-img-group-container">
									<div className="liquid-img-group-inner">
										<div className="liquid-img-group-single" data-roundness="4">
											<div className="liquid-img-group-img-container">
												<div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":47}' data-parallax-to='{"translateY":-74}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
													<figure>
														<img src={introSubTitle1Img}  alt="1111人力銀行公司介紹" />
													</figure>
												</div>
											</div>
										</div>
									</div>
								</div>
		
								<div className="liquid-img-group-container">
									<div className="liquid-img-group-inner">
										<div className="liquid-img-group-single" data-roundness="4">
											<div className="liquid-img-group-img-container">
												<div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":83}' data-parallax-to='{"translateY":-94}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
													<figure>
														<img src={introSubTitle2Img} alt="1111人力銀行公司介紹" />
													</figure>
												</div>
											</div>
										</div>
									</div>
								</div>
		
								<div className="liquid-img-group-container">
									<div className="liquid-img-group-inner">
										<div className="liquid-img-group-single" data-roundness="4">
											<div className="liquid-img-group-img-container">
												<div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"translateY":167}' data-parallax-to='{"translateY":-151}' data-parallax-options='{"overflowHidden": false, "easing": "linear"}'>
													<figure>
														<img src={introSubTitle3Img}  alt="1111人力銀行公司介紹" />
													</figure>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>

						<div className="lqd-column col-md-5 col-lg-5 text-left"  data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

							<header className="fancy-title mb-60">

								<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">COMPANY</h6>
								<h2 className="mt-1 mb-2 tp04-line-1">{introTitle}</h2>
								<p  className="tp04-line-10">{introMainContent}</p>
							</header>

							<a target='_blank' rel='noopener noreferrer' href={companyurl} className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-semibold" >
								<span>
									<span className="btn-txt">加入我們</span>
								</span>
							</a>

						</div>

					</div>
				</div>

				}
				
			</section>

		)

	}
}

export default CompanyInfo;