import React from 'react';
import envConfig from '../../../config/env';

class CompanyCustomize extends React.Component {
    
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getcustomizeList(cid, this.props.themeNum);
    }

    render(){

        const cid = this.props.match.params.cid.trim();
        const { customizeData } = this.props.customizeReducer;
       
        let customizeEnable;
		let customizeTitle;
		let customizeSubTitle;
        let card1Title;
        let card1Img;
        let card2Title;
        let card2Img;
        let card3Title;
        let card3Img;
        let card4Title;
		let card4Img;
		let card5Title;
		let card5Img;
		let card6Title;
		let card6Img;
		let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

        if(customizeData && customizeData.length > 0){
            customizeData.forEach(element => {
                customizeEnable =  element.customizeEnable;
				customizeTitle = element.customizeTitle;
				customizeSubTitle = element.customizeSubTitle;
                card1Title = element.card1Title;
                card1Img = element.card1Img;
                card2Title = element.card2Title;
                card2Img = element.card2Img;
                card3Title = element.card3Title;
                card3Img = element.card3Img;
                card4Title = element.card4Title;
				card4Img = element.card4Img;
				card5Title = element.card5Title;
				card5Img = element.card5Img;
				card6Title = element.card6Title;
                card6Img = element.card6Img;
            })
        }

        // image
        card1Img = !card1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        card2Img = !card2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        card3Img = !card3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
		card4Img = !card4Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;
		card5Img = !card5Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card5Img}`;
		card6Img = !card6Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card6Img}`;

		let imgURL1 = "url(" + card1Img + ")";
		let imgURL2 = "url(" + card2Img + ")";
		let imgURL3 = "url(" + card3Img + ")";
		let imgURL4 = "url(" + card4Img + ")"
		let imgURL5 = "url(" + card5Img + ")";
		let imgURL6 = "url(" + card6Img + ")";

		return (
			
			<section id="custom" className="vc_row pt-10 pb-10" style={customizeEnable? {} : {display: 'none'}}>
				
				{customizeData && customizeData.length > 0 &&
				
				<div className="container">
					<div className="row">
						<div className="lqd-column col-md-10 col-md-offset-1">

							<header className="fancy-title text-center mb-30" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

								<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">{customizeSubTitle}</h6>
								<h2 className="mt-1 mb-2">{customizeTitle}</h2>

							</header>

						</div>
						<div className="lqd-column col-md-12">

							<div className="liquid-portfolio-list">

									<div
										className="row liquid-portfolio-list-row"
										data-columns="3"
										data-liquid-masonry="true"
										data-masonry-options='{ "layoutMode": "masonry", "alignMid": true }'
										data-custom-animations="true"										
									>
										
										<div className="hidden-sm-down lqd-column col-md-4 col-sm-6 col-xs-12 grid-stamp creative-masonry-grid-stamp"></div>
								
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 masonry-item ">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL2}}>
															<img src={card2Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card2Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card2Title}</a>
													
												</div>
												
											</div>
											
										</div>
								
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 masonry-item">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL1}}>
															<img src={card1Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card1Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card1Title}</a>
													
												</div>
												
											</div>
											
										</div>
										
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 masonry-item">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL3}}>
															<img src={card3Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card3Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card3Title}</a>
													
												</div>
												
											</div>
											
										</div>
										
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 masonry-item">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL4}}>
															<img src={card4Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card4Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card4Title}</a>
													
												</div>
												
											</div>
											
										</div>
								
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 masonry-item">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL5}}>
															<img src={card5Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card5Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card5Title}</a>
													
												</div>
												
											</div>
											
										</div>
								
										<div className="lqd-column col-md-4 col-sm-6 col-xs-12 hidden-sm-down show-xs-down masonry-item">
											
											<div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid title-size-32 ld-pf-semiround">
												
												<div className="ld-pf-inner">
													
													<div className="ld-pf-image">
														<figure style={{backgroundImage: imgURL6}}>
															<img src={card6Img} alt="1111人力銀行" />
														</figure>
													</div>
								
													<div className="ld-pf-bg bg-gradient-primary-bl opacity-08"></div>
													
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "duration": 200, "delay": 35, "offDuration": 100, "easing": "easeOutCubic", "initValues": { "translateX": 50, "rotateZ": -75, "opacity": 0, "transformOrigin": [0, "-100%", 0] }, "animations": { "translateX": 0, "rotateZ": 0, "opacity": 1, "transformOrigin": [0, "0%", 0] } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-weight-semibold" data-split-text="true" data-split-options='{ "type": "chars" }'>{card6Title}</h3>
														</div>
													</div>
													
													<a href={companyurl} className="liquid-overlay-link" target='_blank' rel='noopener noreferrer'>{card6Title}</a>
													
												</div>
												
											</div>
											
										</div>
								
									
										
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

export default CompanyCustomize;