import React from 'react';

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
    
        let brandTitle;
		let brandTitleSub1Content;
		let brandURL1;
		let brandURL2;
		let companyurl = `https://www.1111.com.tw/corp/${cid}/#c4`;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
                brandTitle =  element.brandTitle;
                brandTitleSub1Content = element.brandTitleSub1Content;
                brandURL1 = element.brandURL1;
                brandURL2 = element.brandURL2;
            })
        }

		let vedioURL = brandURL1;

		return (
			
			<section id="brand" className="vc_row pt-30 tp06_s5-m-pt">
				{brandData && brandData.length > 0 &&
					<div className="container">
						<div className="row">

							<div className="lqd-column col-md-6 pl-md-6 pr-md-7 text-left">

								<header className="fancy-title mb-15">
									<h2 className="mt-0 mb-2 pr-md-5 tp06_line-2">{brandTitle}</h2>
									<p className="text-justify">{brandTitleSub1Content}</p>
								</header>

								<a href={brandURL2} target='_blank' rel='noopener noreferrer' className="btn btn-sm round btn-bordered border-thin px-2 font-size-17 btn-solid">
									<span>
										<span className="btn-txt">了解更多</span>
									</span>
								</a>

								<a href={companyurl} target='_blank' rel='noopener noreferrer' className="btn btn-sm round btn-bordered border-thin px-2 font-size-17 btn-default btn-light margin-bottom_25px">
									<span>
										<span className="btn-txt">應徵</span>
									</span>
								</a>

							</div>
							
							<div className="lqd-column col-md-6">
								
								
								<iframe
									className="tp06_s5_vedio-m-pt"
									title="1111人力銀行影片"
									style={{width:'100%', height:'315', overflow:'visible'}}
									src={vedioURL}
									width="100%"
									height="315px"
									scrolling="no"
									frameBorder="0"
								/>

							</div>
						</div>
					</div>
				}
			</section>

		)

	}
}

export default CompanyBrand;