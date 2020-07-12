import React from 'react';

class CompanyJobs extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getPositionList(cid, this.props.themeNum);
        this.props.getPositionGrpList(cid, this.props.themeNum);
    }

    render(){
		const cid = this.props.match.params.cid;
		const { positionData } = this.props.positionReducer;
		let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

		return (
			
			<section id="jobs" className="vc_row pt-30 pb-10">
					<div className="container">
						<div className="row">

							<div className="lqd-column col-md-12">

								<div className="fancy-box fancy-box-offer fancy-box-offer-header">

									<div className="fancy-box-header fancy-box-cell">
										<h3>職缺介紹</h3>
									</div>
								
									<div className="fancy-box-cell">
										<h6>地點</h6>
									</div>
								
									<div className="fancy-box-cell">
										<h6>薪資</h6>
									</div>
								
							
									<div className="fancy-box-cell">
										<p></p>
									</div>
									
								</div>

								{Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
									let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";
															
									return(

								<div key={index} className="fancy-box fancy-box-offer fancy-box-heading-sm">	
									<div className="fancy-box-cell fancy-box-header">		
										<h3 className="text-primary">{element.position_name}</h3>
										<p className="position_matter-line">{element.position_matter}</p>						
									</div>
								
									<div className="fancy-box-cell" data-text="">
										<p>{element.position_workCity}</p>
									</div>
								
									<div className="fancy-box-cell" data-text="">
										<p><strong>{element.position_salary}</strong></p>
									</div>
								
									
									
									<div className="fancy-box-cell" data-text="加入">
										<a target='_blank' rel='noopener noreferrer' href={positionURL} className="btn btn-md btn-bordered wide text-uppercase font-weight-bold lh-15">
											<span>
												<span className="btn-txt">應徵</span>
											</span>
										</a>
									</div>
									
								</div>

									)

								})}

							</div>

						</div>
							<div className="row">

								<div className="lqd-column col-sm-6 mb-3 mb-md-0 text-left">

									<a target='_blank' rel='noopener noreferrer' href={companyurl} className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-semibold" >
										<span>
											<span className="btn-txt">所有職缺</span>
										</span>
									</a>

								</div>


							</div>
					</div>
				</section>

		)

	}
}

export default CompanyJobs;