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
		let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

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
			
			<section id="company" className="vc_row pt-60 pb-60">

					{introductionData && introductionData.length > 0 &&
					<div className="container">
						<div className="row d-flex flex-wrap align-items-center">
							
							<div className="lqd-column col-md-6">

								<div className="liquid-img-group-container mb-md-0">
									<div className="liquid-img-group-inner">
										<div className="liquid-img-group-single" data-shadow-style="4" data-roundness="4" data-inview="true" data-animate-shadow="true">
											<div className="liquid-img-group-img-container">
						
												<div className="liquid-img-container-inner">
													<figure>
														<img src={introSubTitle1Img} alt="1111人力銀行公司介紹" />
													</figure>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

							<div className="lqd-column col-md-6 pl-md-6 pr-md-7 text-justify">

								<header className="fancy-title mb-15">
									<h2 className="mt-0 tp06_line-1">{introTitle}</h2>
									<p className="text-justify">{introMainContent}</p>
								</header>

								<a href={companyurl} target='_blank' rel='noopener noreferrer' className="btn btn-sm round btn-bordered border-thin px-2 font-size-17 btn-solid">
									<span>
										<span className="btn-txt">我要應徵</span>
									</span>
								</a>

								<a href={introSubTitle1} target='_blank' rel='noopener noreferrer' className="btn btn-default btn-sm round btn-bordered border-thin btn-light px-2 font-size-17">
									<span>
										<span className="btn-txt">了解更多</span>
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