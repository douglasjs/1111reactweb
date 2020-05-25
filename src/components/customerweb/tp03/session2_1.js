import React from 'react';
import envConfig from '../../../config/env';

class CompanyInfoBrand extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getintroductionList(cid, this.props.themeNum);
    }

    render() {
        const cid = this.props.match.params.cid;
        const { introductionData } = this.props.introductionReducer;

        let introImgEnable;
        let intro1Img;
        let intro2Img;
        let intro3Img;
        let intro4Img;
        let intro5Img;
        let intro6Img;
        let intro7Img;
        let intro8Img;
        let intro9Img;
        let intro10Img;

        if(introductionData && introductionData.length > 0){
            introductionData.forEach(element => {
                introImgEnable =  element.introImgEnable;
                intro1Img = element.intro1Img;
                intro2Img = element.intro2Img;
                intro3Img = element.intro3Img;
                intro4Img = element.intro4Img;
                intro5Img = element.intro5Img;
                intro6Img = element.intro6Img;
                intro7Img = element.intro7Img;
                intro8Img = element.intro8Img;
                intro9Img = element.intro9Img;
                intro10Img = element.intro10Img;
            })
        }

        // image
        intro1Img = !intro1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro1Img}`;
        intro2Img = !intro2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro2Img}`;
        intro3Img = !intro3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro3Img}`;
        intro4Img = !intro4Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro4Img}`;
        intro5Img = !intro5Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro5Img}`;
        intro6Img = !intro6Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro6Img}`;
        intro7Img = !intro7Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro7Img}`;
        intro8Img = !intro8Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro8Img}`;
        intro9Img = !intro9Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro9Img}`;
        intro10Img = !intro10Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${intro10Img}`;

        return (
            <div className="brand-logo-area" style={introImgEnable? {} : {display: 'none'}}>
                {introductionData && introductionData.length > 0 &&
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="brand-logo-content">
                                <div className="brand-logo-item">
                                    <img src={intro1Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro2Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro3Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro4Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro5Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro6Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro7Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro8Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro9Img} alt="1111人力銀行品牌Logo" />
                                </div>

                                <div className="brand-logo-item">
                                    <img src={intro10Img} alt="1111人力銀行品牌Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )

    }
}

export default CompanyInfoBrand;