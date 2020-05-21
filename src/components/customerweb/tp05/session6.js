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
        let customizeTag1;
        let customizeTag2;
        let customizeTag3;
        let customizeTag4;
        let customizeURL1;
        let customizeURL2;
        let customizeURL3;
        let customizeURL4;

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
                customizeTag1 = element.customizeTag1;
                customizeTag2 = element.customizeTag2;
                customizeTag3 = element.customizeTag3;
                customizeTag4 = element.customizeTag4;
                customizeURL1 = element.customizeURL1;
                customizeURL2 = element.customizeURL2;
                customizeURL3 = element.customizeURL3;
                customizeURL4 = element.customizeURL4;
            })
        }

        // image
        card1Img = !card1Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        card2Img = !card2Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        card3Img = !card3Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
        card4Img = !card4Img ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;

        let card1ImgURL = "url(" + card1Img + ")";
        let card2ImgURL = "url(" + card2Img + ")";
        let card3ImgURL = "url(" + card3Img + ")";
        let card4ImgURL = "url(" + card4Img + ")";

        return (
            <section className="events-area pt-70 pb-50" style={customizeEnable? {} : {display: 'none'}}>
                
                {customizeData && customizeData.length > 0 &&
                
                <div id="custom" className="container">
                    <div className="section-title">
                        <h2>{customizeTitle}</h2>
                        <p>{customizeSubTitle}</p>
                    </div>
                    <div className="single-events-box">
                        <div className="events-box">
                            <div className="events-image">
                                <div className="image" style={{backgroundImage: card1ImgURL}}>
                                    <img src={card1Img} alt="自訂圖片" />
                                </div>
                            </div>

                            <div className="events-content">
                                <div className="content text-left">
                                    <h3><a href="/#">{card1Title}</a></h3>
                                    <p>{card1Content}</p>
                                    <span className="location"><i className="fas fa-thumbtack"></i>{customizeTag1}</span>
                                    <a target="_blank" rel="noopener noreferrer" href={customizeURL1} className="join-now-btn">了解更多</a>
                                </div>
                            </div>
                            <div className="box-shape">
                                <img src="../../../assets/tp05/img/box-shape3g.png" alt="自訂圖片" />
                                <img src="../../../assets/tp05/img/box-shape2g.png" alt="自訂圖片" />
                            </div>
                        
                        </div>
                    </div>

                    <div className="single-events-box">
                        <div className="events-box">
                            <div className="events-image">
                                <div className="image" style={{backgroundImage: card2ImgURL}}>
                                    <img src={card2Img} alt="自訂圖片" />
                                </div>
                            </div>

                            <div className="events-content">
                                <div className="content text-left">
                                    <h3><a href="/#">{card2Title}</a></h3>
                                    <p>{card2Content}</p>
                                    <span className="location"><i className="fas fa-thumbtack"></i>{customizeTag2}</span>
                                    <a target="_blank" rel="noopener noreferrer" href={customizeURL2} className="join-now-btn">了解更多</a>
                                </div>
                            </div>
                            <div className="box-shape">
                                <img src="../../../assets/tp05/img/box-shape3g.png" alt="自訂圖片" />
                                <img src="../../../assets/tp05/img/box-shape2g.png" alt="自訂圖片" />
                            </div>
                        
                        </div>
                    </div>

                    <div className="single-events-box">
                        <div className="events-box">
                            <div className="events-image">
                                <div className="image" style={{backgroundImage: card3ImgURL}}>
                                    <img src={card3Img} alt="自訂圖片" />
                                </div>
                            </div>

                            <div className="events-content">
                                <div className="content text-left">
                                    <h3><a href="/#">{card3Title}</a></h3>
                                    <p>{card3Content}</p>
                                    <span className="location"><i className="fas fa-thumbtack"></i>{customizeTag3}</span>
                                    <a target="_blank" rel="noopener noreferrer" href={customizeURL3} className="join-now-btn">了解更多</a>
                                    
                                </div>
                            </div>
                            <div className="box-shape">
                                <img src="../../../assets/tp05/img/box-shape3g.png" alt="自訂圖片" />
                                <img src="../../../assets/tp05/img/box-shape2g.png" alt="自訂圖片" />
                            </div>
                        
                        </div>
                    </div>

                    <div className="single-events-box">
                        <div className="events-box">
                            <div className="events-image">
                                <div className="image" style={{backgroundImage: card4ImgURL}}>
                                    <img src={card4Img} alt="自訂圖片" />
                                </div>
                            </div>

                            <div className="events-content">
                                <div className="content text-left">
                                    <h3><a href="/#">{card4Title}</a></h3>
                                    <p>{card4Content}</p>
                                    <span className="location"><i className="fas fa-thumbtack"></i>{customizeTag4}</span>
                                    <a target="_blank" rel="noopener noreferrer" href={customizeURL4} className="join-now-btn">了解更多</a>
                                    <div className="box-shape">
                                        <img src="../../../assets/tp05/img/box-shape3g.png" alt="自訂圖片" />
                                        <img src="../../../assets/tp05/img/box-shape2g.png" alt="自訂圖片" />
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

export default CompanyCustomize;