import React from 'react';

class CompanyQA extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getqaList(cid, this.props.themeNum);
    }

    render(){
        const { qaData } = this.props.qaReducer;

		let qaEnable;
		let qaSubTitle;
        let qa1Title;
        let qa1Content;
        let qa2Title;
        let qa2Content;
        let qa3Title;
        let qa3Content;

        if(qaData && qaData.length > 0){
            qaData.forEach(element => {
				qaEnable =  element.qaEnable;
				qaSubTitle = element.qaSubTitle;
                qa1Title = element.qa1Title;
                qa1Content = element.qa1Content;
                qa2Title = element.qa2Title;
                qa2Content = element.qa2Content;
                qa3Title = element.qa3Title;
                qa3Content = element.qa3Content;
            })
        }

		let imgURL = "url('./image/tp04/bk.png')";

		return (

			<section id="faq" className="vc_row pt-150 pb-100" style={qaEnable? {} : {display: 'none'}}>
				
				{qaData && qaData.length > 0 &&
				
				<div className="container">
					<div className="row text-left" style={{backgroundImage: imgURL}}>

						<div className="lqd-column col-lg-4 col-md-12 pb-sm-5"  data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

							<header className="fancy-title mb-130">

								<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">Have a question?</h6>
								<h2 className="mt-1 mb-2">常見問題</h2>
								<p className="line-4">{qaSubTitle}</p>

							</header>

						</div>

						<div className="lqd-column col-lg-7 col-lg-offset-1 col-xs-12 mb-7 mb-md-0">

							<div className="carousel-container carousel-vertical-3d">

								<div className="carousel-items">	
									<div className="carousel-item is-active">	
										<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
											<div className="testimonial-info">
												<h6 className="font-weight-semibold">{qa1Title}</h6>
											</div>
											<div className="testimonial-quote">
												<blockquote>
													<p className="font-size-16">{qa1Content}</p>
												</blockquote>
											</div>
										</div>	
									</div>
									
									<div className="carousel-item is-active">	
										<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
											<div className="testimonial-info">
												<h6 className="font-weight-semibold">{qa2Title}</h6>
											</div>
											<div className="testimonial-quote">
												<blockquote>
													<p className="font-size-16">{qa2Content}</p>
												</blockquote>
											</div>
										</div>	
									</div>
									
									<div className="carousel-item is-active">	
										<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
											<div className="testimonial-info">
												<h6 className="font-weight-semibold">{qa3Title}</h6>
											</div>
											<div className="testimonial-quote">
												<blockquote>
													<p className="font-size-16">{qa3Content}</p>
												</blockquote>
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

export default CompanyQA;