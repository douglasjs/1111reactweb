import React from 'react';
import envConfig from '../../../config/env';

class CompanyTitle extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

   componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getCompanyList(cid, this.props.themeNum? this.props.themeNum: 'tp05');
    }

    render(){
        const cid = this.props.match.params.cid;
        const { companyData } = this.props.companyReducer;

		let title;
		let companySubTitle1;
		let companySubTitle2;
		let companyBackgroundImg1;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
				title = element.title;
				companySubTitle1 = element.companySubTitle1;
				companySubTitle2 = element.companySubTitle2;
                companyBackgroundImg1 = element.companyBackgroundImg1;
            })
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;

		return (
			
			<section className="min-h-768 pad-height vc_row d-flex flex-wrap align-items-center pb-30 mt-xs-15">

				{companyData && companyData.length > 0 && <div>

				<div className="lqd-particles-bg-wrap">

					<div className="ld-particles-container">
						<div
							className="ld-particles-inner"
							id="ld-1527244273759-519b63e0-a9d6"
							data-particles="true"
							data-particles-options='{"particles":{"number":{"value":5,"density":2},"color":{"value":["#f9b851","#60eacb","#ff97af","#4e6bff"]},"shape":{"type":["circle","edge","triangle"]},"size":{"value":55,"random":true,"anim":{"enable":true,"size_min":40,"speed":5}},"move":{"enable":true,"direction":"right","speed":1,"random":true,"out_mode":"out","attract":{"enable":true,"rotateX":1200,"rotateY":600}}},"interactivity":[],"retina_detect":true}'>
						</div>
					</div>

				</div>

				<div className="container">
					<div className="row d-flex flex-wrap align-items-center">

						<div className="lqd-column col-lg-6 col-md-6 top-text-block" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":51,"opacity":0},"animations":{"translateY":0,"opacity":1}}' >

							<div className="ld-fancy-heading mask-text text-left">
								<h1
									data-custom-animations="true"
									data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":1200,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"scale":1},"animations":{"scale":1}}'
									data-split-options='{"type":"lines"}'
								>
									<span className="ld-fh-txt line-3">{title}</span>
								</h1>
								<h4								
									data-custom-animations="true"
									data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":1200,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"scale":1},"animations":{"scale":1}}'
									data-split-options='{"type":"lines"}'
								>
									<span className="text-left">{companySubTitle1}</span>
								</h4>
							</div>

							<div className="ld-fancy-heading mask-text mb-75 text-left">
								<p
									data-custom-animations="true"
									data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":1200,"delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"scale":1},"animations":{"scale":1}}'
									data-split-options='{"type":"lines"}'>
									<span className="ld-fh-txt hidden-sm-down text-justify">
										{companySubTitle2}<br />
									</span>							
								</p>
							</div>
							
							<div className="row">

								<div className="lqd-column col-sm-6 mb-3 mb-md-0 text-left">

									<a target='_blank' rel='noopener noreferrer' href={companyurl} className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-semibold" >
										<span>
											<span className="btn-txt">馬上應徵</span>
										</span>
									</a>

								</div>

							</div>

						</div>

						<div className="lqd-column col-lg-6 col-md-6 hidden-xs hidden-sm ">
							
							<div className="ld-masked-image" data-dynamic-shape="true">
								<svg version="1.1" className="scene" width="0" height="0" preserveAspectRatio="none" viewBox="0 0 1440 800">
									<defs>
										<clipPath id="masked-image-1">
											<path
												fill="black"
												d="M131,40 C84.135,83.534 96.819,148.446 63.283,217.394 C31.508,282.723 -3.621,324.812 1.461,394.323 C3.451,421.533 12.117,449.828 29.796,480.002 C87.412,578.34 -15.301,663.448 94.611,833.387 C156.302,928.77 316.559,918.015 435.971,936.052 C572.741,956.711 653.384,1003.601 753.566,971.715 C877.689,932.209 924.99262,809.932822 972.63862,707.700822 C1063.84662,512.000822 1038.71071,197.732895 884.476705,67.2268952 C788.919705,-13.6291048 714.704,70.008 529,43 C339.693,15.468 212.609,-35.808 131,40 Z"
												pathdata="
												M175.270836,26.7977911 C128.405836,70.3317911 129.938279,144.739124 96.4022789,213.687124 C64.6272789,279.016124 41.242383,286.071679 46.324383,355.582679 C48.314383,382.792679 79.5246278,459.251586 88.7738696,492.334164 C116.497714,591.496483 -75.3047466,680.552915 34.6072534,850.491915 C96.2982534,945.874915 281.559,906.015 400.971,924.052 C537.741,944.711 678.161685,902.348368 778.343685,870.462368 C902.466685,830.956368 927.354,806.232 975,704 C1066.208,508.3 1058.68971,185.848951 904.455709,55.3429506 C808.898709,-25.5130494 786.027661,117.60054 600.323661,90.5925401 C411.016661,63.0605401 256.879836,-49.0102089 175.270836,26.7977911 Z;
												M200.391256,6 C138.06059,22.7990703 77.9622177,42.6445401 44.4262177,111.59254 C12.6512177,176.92154 -4.1051307,212.01786 0.976869296,281.52886 C2.9668693,308.73886 99.0297526,534.545109 108.278994,567.627688 C136.002839,666.790006 -29.1381304,721.523368 80.7738696,891.462368 C142.46487,986.845368 331.636556,840.153183 451.048556,858.190183 C587.818556,878.849183 705.371102,948.496676 805.553102,916.610676 C929.676102,877.104676 941.497784,689.3436 989.143784,587.1116 C1080.35178,391.4116 1050.68971,206.848951 896.455709,76.3429506 C800.898709,-4.5130494 778.027661,138.60054 592.323661,111.59254 C403.016661,84.0605401 312.765712,-24.2866392 200.391256,6 Z"
											/>
										</clipPath>
									</defs>
								</svg>
								<figure className="clip-svg session1" data-responsive-bg="true">
									<img src={companyBackgroundImg1} alt="1111人力銀行Banner" />
								</figure>
							</div>

						</div>

					</div>
				</div>
				
				</div>}

			</section>
		)

	}
}

export default CompanyTitle;