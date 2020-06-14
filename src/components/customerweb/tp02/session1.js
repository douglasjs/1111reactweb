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
        const { data } = this.props.datatableReducer;

		let title;
		let companySubTitle1;
        let companyBackgroundImg1;
        let styleType;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
				title = element.title;
				companySubTitle1 = element.companySubTitle1;
                companyBackgroundImg1 = element.companyBackgroundImg1;
            })
        }

        if(data && data.length > 0){
            styleType = data[0].styleType;
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;

        let imgURL = "url(image/tp02/background/banner-1_"+ styleType + ".png)";

        return (
            
            <section className="banner-section" style={{backgroundImage: imgURL}}>
                {companyData && companyData.length > 0 && <div>
                <div className="anim-icon">
                    <div className="icon icon-1 float-bob-x"></div>
                    <div className="icon icon-2"></div>
                    <div className="icon icon-3"></div>
                    <div className="icon icon-4 float-bob-y"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box text-left s1_width">
                                <h1>{title}</h1>
                                <div className="text">{companySubTitle1}</div>
                                <div className="btn-box">
                                    <a className="btn-style-two" target="_blank" rel="noopener noreferrer" href={companyurl}>徵的就是你!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image float-bob-y clearfix">
                                    <img src={companyBackgroundImg1} alt="1111人力銀行" />
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