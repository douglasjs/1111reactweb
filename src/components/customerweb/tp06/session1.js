import React from 'react';
import envConfig from '../../../config/env';

class CompanyTitle extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

   componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getCompanyList(cid, this.props.themeNum? this.props.themeNum: 'tp06');
    }

    render(){
        const cid = this.props.match.params.cid;
        const { companyData } = this.props.companyReducer;

        let title;
        let companySubTitle1;
        let companyBackgroundImg1;

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
                title =  element.title;
                companySubTitle1 = element.companySubTitle1;
                companyBackgroundImg1 = element.companyBackgroundImg1;
            })
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;

		return (
			
			<section className="vc_row pt-110 pb-60 bg-cover bg-center-top" data-row-bg={companyBackgroundImg1}>

				<span className="row-bg-loader"></span>

				{companyData && companyData.length > 0 &&
				<div className="container">
					<div className="row">

						<div
							className="lqd-column col-md-6 text-left"
							data-custom-animations="true"
							data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"120", "startDelay": 200,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

							<h2
								className="h1 pr-md-7 mb-30 text-white text-left tp06_banner_title-pt tp06_banner-title"
								data-split-text="true"
								data-split-options='{"type":"lines"}'
								data-fittext="true"
								data-fittext-options='{"compressor": 0.5, "maxFontSize": 54}'>
								{title}
							</h2>

							<p className="mb-40 font-size-18 lh-175 text-fade-white-06 pr-md-5 tp06_line-1 tp06_banner-subtitle">{companySubTitle1}</p>
						
						</div>

					</div>
				</div>
				}

			</section>
		)

	}
}

export default CompanyTitle;