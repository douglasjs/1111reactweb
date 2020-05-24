import React from 'react';
import envConfig from '../../../config/env';

class CompanyCustomize extends React.Component {
    
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getcustomizeList(cid, this.props.themeNum);
    }

    render(){

        const cid = this.props.match.params.cid.trim();
        const { customizeData } = this.props.customizeReducer;
       
        let customizeEnable;
        let customizeTitle;
        let customizeSubTitle;
        let card1Title;
        let card1Content;
        let card1Img;
        let card2Title;
        let card2Content;
        let card2Img;
        let card3Title;
        let card3Content;
        let card3Img;
        let card4Title;
        let card4Content;
        let card4Img;
        let card5Title;
        let card5Content;
        let card5Img;
        let card6Title;
        let card6Content;
        let card6Img;

        if(customizeData && customizeData.length > 0){
            customizeData.forEach(element => {
                customizeEnable =  element.customizeEnable;
                customizeTitle = element.customizeTitle;
                customizeSubTitle = element.customizeSubTitle;
                card1Title = element.card1Title;
                card1Content = element.card1Content;
                card1Img = element.card1Img;
                card2Title = element.card2Title;
                card2Content = element.card2Content;
                card2Img = element.card2Img;
                card3Title = element.card3Title;
                card3Content = element.card3Content;
                card3Img = element.card3Img;
                card4Title = element.card4Title;
                card4Content = element.card4Content;
                card4Img = element.card4Img;
                card5Title = element.card5Title;
                card5Content = element.card5Content;
                card5Img = element.card5Img;
                card6Title = element.card6Title;
                card6Content = element.card6Content;
                card6Img = element.card6Img;
            })
        }

        // image
        card1Img = !card1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        card2Img = !card2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        card3Img = !card3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
        card4Img = !card4Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;
        card5Img = !card5Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card5Img}`;
        card6Img = !card6Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card6Img}`;

        return (
            <div id="custom" className="element-content-area sp-y-custom" style={customizeEnable? {} : {display: 'none'}}>
                {customizeData && customizeData.length > 0 &&
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="section-title mb-0">
                                <h5>{customizeSubTitle}</h5>
                                <h4 className="font-weight-bold">{customizeTitle}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="col-12">

                            <div className="position-relative">
                                <div className="service-slider-content">
                                    
                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card1Img} alt="1111人力銀行客制化" />
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card1Title}</h2>
                                            <p className="p-hide-text-custom">{card1Content}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card2Img} alt="1111人力銀行客制化" />
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card2Title}</h2>
                                            <p className="p-hide-text-custom">{card2Content}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card3Img} alt="1111人力銀行客制化" />
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card3Title}</h2>
                                            <p className="p-hide-text-custom">{card3Content}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card4Img} alt="1111人力銀行客制化" />	
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card4Title}</h2>
                                            <p className="p-hide-text-custom">{card4Content}</p>
                                        </div>
                                    </div>

                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card5Img} alt="1111人力銀行客制化" />	
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card5Title}</h2>
                                            <p className="p-hide-text-custom">{card5Content}</p>
                                        </div>
                                    </div>

                                    <div className="service-item">
                                        <div className="service-item__thumb">
                                            <img src={card6Img} alt="1111人力銀行客制化" />	
                                        </div>
                                        <div className="service-item__txt text-left">
                                            <h2 className="h6">{card6Title}</h2>
                                            <p className="p-hide-text-custom">{card6Content}</p>
                                        </div>
                                    </div>
                                    
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

export default CompanyCustomize;