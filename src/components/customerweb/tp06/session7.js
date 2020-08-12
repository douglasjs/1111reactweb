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
        let qa1Title;
        let qa1Content;
        let qa2Title;
        let qa2Content;
        let qa3Title;
        let qa3Content;

        if(qaData && qaData.length > 0){
            qaData.forEach(element => {
                qaEnable =  element.qaEnable;
                qa1Title = element.qa1Title;
                qa1Content = element.qa1Content;
                qa2Title = element.qa2Title;
                qa2Content = element.qa2Content;
                qa3Title = element.qa3Title;
                qa3Content = element.qa3Content;
            })
        }

		return (

			<section id="faq" className="vc_row" style={qaEnable? {} : {display: 'none'}}>
				{qaData && qaData.length > 0 &&
					<div className="container">
						<div className="row text-left">
							
							<div className="lqd-column m-3">

								<header className="fancy-heading pb-2">
									<h2>常見問題</h2>
								</header>

								<div className="accordion accordion-tall accordion-body-underlined accordion-expander-lg accordion-active-color-primary" id="accordion-2" role="tablist">

									<div className="accordion-item panel active">
										<div className="accordion-heading" role="tab" id="accordion-collapse-heading-1">
											<h4 className="accordion-title font-size-19">
												<a data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-panel-1" aria-expanded="true" aria-controls="accordion-collapse-panel-1">
													<div className="tp06-width-90">{qa1Title}</div>
													<span className="accordion-expander">
														<i className="icon-arrows_circle_plus"></i>
														<i className="icon-arrows_circle_minus"></i>
													</span>
												</a>
											</h4>
										</div>
										<div id="accordion-collapse-panel-1" className="accordion-collapse collapse in" role="tabpanel" aria-labelledby="accordion-collapse-heading-1">
											<div className="accordion-content">
												<p className="tp06_line-7">{qa1Content}</p>
											</div>
										</div>
									</div>

									<div className="accordion-item panel">
										<div className="accordion-heading" role="tab" id="accordion-collapse-heading-2">
											<h4 className="accordion-title font-size-19">
												<a className="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-collapse-2" aria-expanded="false" aria-controls="accordion-collapse-collapse-2">
													<div className="tp06-width-90">{qa2Title}</div>
													<span className="accordion-expander">
														<i className="icon-arrows_circle_plus"></i>
														<i className="icon-arrows_circle_minus"></i>
													</span>
												</a>
											</h4>
										</div>
										<div id="accordion-collapse-collapse-2" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="accordion-collapse-heading-2">
											<div className="accordion-content">
												<p className="tp06_line-7">{qa2Content}</p>
											</div>
										</div>
									</div>

									<div className="accordion-item panel">
										<div className="accordion-heading" role="tab" id="accordion-collapse-heading-3">
											<h4 className="accordion-title font-size-19">
												<a className="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-collapse-3" aria-expanded="false" aria-controls="accordion-collapse-collapse-3">
													<div className="tp06-width-90">{qa3Title}</div>
													<span className="accordion-expander">
														<i className="icon-arrows_circle_plus"></i>
														<i className="icon-arrows_circle_minus"></i>
													</span>
												</a>
											</h4>
										</div>
										<div id="accordion-collapse-collapse-3" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="accordion-collapse-heading-3">
											<div className="accordion-content">
												<p className="tp06_line-7">{qa3Content}</p>
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