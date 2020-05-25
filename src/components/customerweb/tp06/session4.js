import React from 'react';

class CompanyJobs extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getPositionList(cid, this.props.themeNum);
    }

    render(){
        const { positionData } = this.props.positionReducer;

		let imgURL = "url(../../../image/tp06/jobs_bg-1.jpg)";

		return (
			
			<section id="jobs" className="vc_row pt-30 pb-30 bg-cover" data-parallax="true" data-parallax-options='{ "parallaxBG": true }' style={{backgroundImage: imgURL}} >

					<div className="container text-center">

						<div className="row">

							<div className="lqd-column col-md-6 col-md-offset-3">

								<header className="fancy-title mb-20 text-center">
									<h2>職缺介紹</h2>
								</header>

							</div>

						</div>

						<div className="row">
							<div  className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
								<div className="carousel-items row" data-lqd-flickity='{"cellAlign":"center","prevNextButtons":false,"pageDots":true,"groupCells":false,"wrapAround":true,"pauseAutoPlayOnHover":false}'>

									{Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
                                        let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";
                                                    
                                        return(

										<div key={index} className="lqd-column carousel-item col-md-4">

											<div className="pricing-table pricing-table-minimal border-athens-gray">
							
												<div className="pricing-table-header">
														
													<p className="pricing">
														<span>{element.position_name}</span>
													</p>
										
													<h6>{element.position_workCity}</h6>
													<h5>{element.position_dutyName}</h5>
														
												</div>
													
												<div className="pricing-table-body">
													<ul>
														<li>{element.position_salary}</li>
														<li>{element.position_experience}</li>
													</ul>
												</div>
													
												<div className="pricing-table-footer">
													
													<a href={positionURL} className="btn btn-sm btn-solid round lh-15 px-2">
														<span>
															<span className="btn-txt">有興趣</span>
														</span>
													</a>
														
												</div>
													
											</div>
					
										</div>
										)

									})}

								</div>
							</div>
						
						</div>
							
								<a href="https://www.1111.com.tw/corp/50750609/" className="mt-40 btn btn-sm btn-solid round lh-15 px-2" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
									<span>
										<span className="btn-txt">所有職缺</span>
										<span className="btn-icon"><i className="fa fa-angle-right"></i></span>
									</span>
								</a>
								
							
					</div>

				</section>

		)

	}
}

export default CompanyJobs;