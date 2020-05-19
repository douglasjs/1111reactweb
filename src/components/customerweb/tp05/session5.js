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
    
        let brandTitle;
        let brandTitleSub1Content;
        let brandImg;
        let brandURL1;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
                brandTitle =  element.brandTitle;
                brandTitleSub1Content = element.brandTitleSub1Content;
                brandImg = element.brandImg;
                brandURL1 = element.brandURL1;
            })
        }

        // image
        brandImg = !brandImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        
        return (
            <section id="brand" className="about-area ptb-100">
                {brandData && brandData.length > 0 &&
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src={brandImg} alt="品牌介紹" />
                                <div className="shape">
                                    <img src="../../../assets/tp05/img/dot.png" alt="品牌介紹" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content text-left">
                                <span>Brands</span>
                                <h2>{brandTitle}</h2>
                                <p>{brandTitleSub1Content}</p>
                                <a className="default-btn" href={brandURL1} target="_blank" rel="noopener noreferrer">了解更多<span></span></a>
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