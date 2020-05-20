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

        let companyBackgroundImg1;
        let companyBackgroundImg2;
        //let companyurl = "https://www.1111.com.tw/corp/" + cid + "/";

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
                companyBackgroundImg1 = element.companyBackgroundImg1;
                companyBackgroundImg2 =  element.companyBackgroundImg2;
            })
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        companyBackgroundImg2 = !companyBackgroundImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;

        let imgURL1 = "url(" + companyBackgroundImg1 + ")";
        let imgURL2 = "url(" + companyBackgroundImg2 + ")";

        return (        

            <div className="home-area home-slides-two owl-carousel owl-theme">

                {companyData && companyData.length > 0 && <div>
                
                <div className="banner-section" style={{backgroundImage: imgURL1}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container"></div>
                        </div>
                    </div>
                </div>
                <div className="banner-section" style={{backgroundImage: imgURL2}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container"></div>
                        </div>
                    </div>
                </div>

                </div>}
                
            </div>
        )

    }
}

export default CompanyTitle;