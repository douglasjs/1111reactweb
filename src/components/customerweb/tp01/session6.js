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
        /*let card6Title;
        let card6Content;
        let card6Img;
        let card7Title;
        let card7Content;
        let card7Img;
        let card8Title;
        let card8Content;
        let card8Img;
        */

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
                /*card6Title = element.card6Title;
                card6Content = element.card6Content;
                card6Img = element.card6Img;
                card7Title = element.card7Title;
                card7Content = element.card7Content;
                card7Img = element.card7Img;
                card8Title = element.card8Title;
                card8Content = element.card8Content;
                card8Img = element.card8Img;
                */
            })
        }

        // image
        card1Img = !card1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        card2Img = !card2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        card3Img = !card3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
        card4Img = !card4Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;
        
        card5Img = !card5Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card5Img}`;
        /*card6Img = !card6Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card6Img}`;
        card7Img = !card7Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card7Img}`;
        card8Img = !card8Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card8Img}`;
        */

        return (
            <section id="custom" className="vc_row pt-30" style={customizeEnable? {} : {display: 'none'}}>
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column col-md-12">
    
                            <header className="fancy-title mb-30" id="fancy-title-unlimited-classes">
                                <h2 className="text-uppercase ltr-sp-0 tp01_line-1 text-left tp01-title-font-size">{customizeTitle} </h2>
                                <p className="tp01_custom_subtitle_line text-left">{customizeSubTitle} </p>
                            </header>
    
                        </div>
    
                        <div className="lqd-column col-md-12">
    
                            <div className="carousel-container carousel-nav-right carousel-nav-sm carousel-nav-bordered carousel-nav-square carousel-dots-style1">
    
                                <div className="carousel-items row" data-lqd-flickity='{"cellAlign":"left","prevNextButtons":true,"buttonsAppendTo":"#fancy-title-unlimited-classes","pageDots":false,"groupCells":false,"wrapAround":true,"pauseAutoPlayOnHover":false,"navArrow":{"prev":"<i class=\"fa fa-angle-left\"></i>","next":"<i class=\"fa fa-angle-right\"></i>"}}'>
    
    
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card1Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card1Title}</h3>
                                                    <span className="trainer tp01_line-2">{card1Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card2Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card2Title}</h3>
                                                    <span className="trainer tp01_line-2">{card2Content}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
    
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card3Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">    
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card3Title}</h3>
                                                    <span className="trainer tp01_line-2">{card3Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card4Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card4Title}</h3>
                                                    <span className="trainer tp01_line-2">{card4Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>

                                    
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card5Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card5Title}</h3>
                                                    <span className="trainer tp01_line-2">{card5Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
{/*}
                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card6Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card6Title}</h3>
                                                    <span className="trainer tp01_line-2">{card6Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>

                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card7Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card7Title}</h3>
                                                    <span className="trainer tp01_line-2">{card7Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>

                                    <div className="lqd-column carousel-item col-md-3 col-sm-6">
    
                                        <div className="fancy-box content-box-heading-sm fancy-box-classes">
                                            <figure className="fancy-box-image">
                                                <img src={card8Img} alt="1111人力銀行客製化" />
                                            </figure>
                                            <div className="fancy-box-contents">
                                                <div className="fancy-box-info text-left">
                                                    <h3 className="tp01_line-1">{card8Title}</h3>
                                                    <span className="trainer tp01_line-2">{card8Content}</span>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                    {*/}
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
                </div>
            </section>
        )
    }


}

export default CompanyCustomize;