import React from 'react';
import envConfig from '../../../config/env';

class CompanyBrand extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getbrandList(cid, this.props.themeNum);
    }

    render(){
        const cid = this.props.match.params.cid;
        const { brandData } = this.props.brandReducer;
    
		let brandTitleSub1;
		let brandTitleSub1Content;
		let brandTitleSub2;
		let brandTitleSub2Content;
		let brandImg1;
		let brandImg2;
		let brandURL1;
		let brandURL2;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
				brandTitleSub1 = element.brandTitleSub1;
				brandTitleSub1Content = element.brandTitleSub1Content;
				brandTitleSub2 = element.brandTitleSub2;
				brandTitleSub2Content = element.brandTitleSub2Content;
				brandImg1 = element.brandImg1;
				brandImg2 = element.brandImg2;
				brandURL1 = element.brandURL1;
				brandURL2 = element.brandURL2;
            })
        }

        // image
		brandImg1 = !brandImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg1}`;
		brandImg2 = !brandImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg2}`;

		return (
			
			<section id="brand" className="vc_row pt-10 pb-10">
				
				{brandData && brandData.length > 0 &&

					<div className="container">
						<div className="row">

							<div className="lqd-column col-md-12 text-center">

								<header className="fancy-title text-center mb-30" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":100,"initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
		
									<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">Brand</h6>
									<h2 className="mt-1 mb-2">品牌介紹</h2>
		
								</header>

							</div>

							<div className="lqd-column col-md-6">

								<div className="testimonial testimonial-quote-filled text-center">

									<div className="testimonial-quote bg-light-creative">
										<blockquote>
											<p className="font-size-18 line-4">{brandTitleSub1Content}</p>
										</blockquote>
									</div>

									<div className="testimonial-details">
										<figure className="avatar ">
											<img src={brandImg1} alt="1111人力銀行品牌介紹" />
										</figure>
										<div className="testimonial-info">
											<h5>{brandTitleSub1}</h5>
											<h6 className="font-weight-normal">{brandURL1}</h6>
										</div>

									</div>

								</div>

							</div>

							<div className="lqd-column col-md-6">

								<div className="testimonial testimonial-quote-filled text-center testimonial-quote-shadowed">

									<div className="testimonial-quote brand-content" >
										<blockquote>
											<p className="font-size-18 line-4">{brandTitleSub2Content}</p>
										</blockquote>
									</div>

									<div className="testimonial-details">
										<figure className="avatar ">
											<img src={brandImg2} alt="1111人力銀行品牌介紹" />
										</figure>
										<div className="testimonial-info">
											<h5>{brandTitleSub2}</h5>
											<h6 className="font-weight-normal">{brandURL2}</h6>
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

export default CompanyBrand;