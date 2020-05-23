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
        let card1Title;
        let card1Content;
        let card1Img;
        let card2Title;
        let card2Content;
        let card2Img;
        let card3Title;
        let card3Content;
        let card3Img;

        if(customizeData && customizeData.length > 0){
            customizeData.forEach(element => {
                customizeEnable =  element.customizeEnable;
                card1Title = element.card1Title;
                card1Content = element.card1Content;
                card1Img = element.card1Img;
                card2Title = element.card2Title;
                card2Content = element.card2Content;
                card2Img = element.card2Img;
                card3Title = element.card3Title;
                card3Content = element.card3Content;
                card3Img = element.card3Img;
            })
        }

        // image
        card1Img = !card1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        card2Img = !card2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        card3Img = !card3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;

        return (
            <section id="custom" className="work-section" style={customizeEnable? {} : {display: 'none'}}>

                {customizeData && customizeData.length > 0 && <div>

                <div className="anim-icon">
                    <div className="icon icon-1"></div>
                </div>
                <div className="container text-left">
                    <div className="inner-content">
                        <div className="inner-box">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <div className="count-number wow zoomIn" data-wow-delay="1000ms" data-wow-duration="1500ms">1</div>
                                        <h1>{card1Title}</h1>
                                        <div className="text">{card1Content}</div>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <figure className="image float-bob-y clearfix"><img src={card1Img} alt="1111人力銀行" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-last order-sm-last order-xs-last">
                                    <div className="image-box">
                                        <figure className="image float-bob-y clearfix"><img src={card2Img} alt="1111人力銀行" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <div className="count-number wow zoomIn" data-wow-delay="1000ms" data-wow-duration="1500ms">2</div>
                                        <h1>{card2Title}</h1>
                                        <div className="text">{card2Content}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <div className="count-number wow zoomIn" data-wow-delay="1000ms" data-wow-duration="1500ms">3</div>
                                        <h1>{card3Title}</h1>
                                        <div className="text">{card3Content}</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <figure className="image float-bob-y clearfix"><img src={card3Img} alt="1111人力銀行" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>}
                
            </section>
        )

    }
}

export default CompanyCustomize;