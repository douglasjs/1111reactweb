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
        let card1Content;
        let card1Img;
        let card2Title;
        let card2Content;
        let card2Img;
        let card3Title;
        let card3Content;
        let card3Img;
        let card4Title;
        let card4Content;
        let card4Img;
        let card5Title;
        let card5Content;
        let card5Img;
        let card6Title;
        let card6Content;
		let card6Img;
		let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

        if(customizeData && customizeData.length > 0){
            customizeData.forEach(element => {
                customizeEnable =  element.customizeEnable;
                customizeTitle = element.customizeTitle;
                customizeSubTitle = element.customizeSubTitle;
                card1Title = element.card1Title;
                card1Content = element.card1Content;
                card1Img = element.card1Img;
                card2Title = element.card2Title;
                card2Content = element.card2Content;
                card2Img = element.card2Img;
                card3Title = element.card3Title;
                card3Content = element.card3Content;
                card3Img = element.card3Img;
                card4Title = element.card4Title;
                card4Content = element.card4Content;
                card4Img = element.card4Img;
                card5Title = element.card5Title;
                card5Content = element.card5Content;
                card5Img = element.card5Img;
                card6Title = element.card6Title;
                card6Content = element.card6Content;
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

		return (
			
			<section id="custom" className="vc_row bg-athens-gray" style={customizeEnable? {} : {display: 'none'}}>
				{customizeData && customizeData.length > 0 &&
					<div className="container">
						<div className="row">

							<div className="lqd-column col-md-6 col-md-offset-3 text-center mb-10">

								<header className="fancy-heading px-md-5">
									<h2 className="tp06_s6_title">{customizeTitle}</h2>
									<p>{customizeSubTitle}</p>
								</header>

							</div>

							<div className="lqd-column col-md-12">

								<div className="liquid-portfolio-list">
									<div className="row liquid-portfolio-list-row" data-liquid-masonry="true">

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card1Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card1Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card1Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
										</div>

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card2Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card2Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card2Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
										</div>

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card3Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card3Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card3Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
										</div>

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card4Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card4Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card4Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
										</div>

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card5Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card5Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card5Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
										</div>

										<div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
											<article className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-mid pf-hover-masktext">
												<div className="ld-pf-inner">
													<div className="ld-pf-image">
														<figure data-responsive-bg="true">
															<img src={card6Img} alt="1111人力銀行" />
														</figure>
													</div>
													<div className="ld-pf-bg bg-primary opacity-09"></div>
													<div className="ld-pf-details" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 80, "duration": 650, "delay": 150, "initValues": { "translateY": "150%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
														<div className="ld-pf-details-inner">
															<h3 className="ld-pf-title h4 font-size-19 text-uppercase tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card6Title}</h3>
															<div className="ld-pf-category size-sm">
																<a href={companyurl} target='_blank' rel='noopener noreferrer' className="text-uppercase ltr-sp-1 tp06_line-1" data-split-text="true" data-split-options='{ "type": "lines" }'>{card6Content}</a>
															</div>
														</div>
													</div>
													<a href={companyurl} target='_blank' rel='noopener noreferrer' className="liquid-overlay-link">{}</a>
												</div>
											</article>
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