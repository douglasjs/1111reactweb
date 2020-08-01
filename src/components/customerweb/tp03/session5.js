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
        let brandImg;
        let brandImg1;
        let brandImg2;
        let brandImg3;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
                brandTitleSub1 = element.brandTitleSub1;
                brandTitleSub1Content = element.brandTitleSub1Content;
                brandTitleSub2 = element.brandTitleSub2;
                brandTitleSub2Content = element.brandTitleSub2Content;
                brandImg = element.brandImg;
                brandImg1 = element.brandImg1;
                brandImg2 = element.brandImg2;
                brandImg3 = element.brandImg3;
            })
        }

        // image
        brandImg = !brandImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        brandImg1 = !brandImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg1}`;
        brandImg2 = !brandImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg2}`;
        brandImg3 = !brandImg3 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg3}`;

        return (
            <div id="brand" className="gallery-banner-area custom-top">
                <div className="row no-gutters">
                    <div className="col-md-6 col-xl-6">
                        <div className="gallery-banner-item bg-img" data-bg={brandImg}></div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="gallery-banner-item bg-img" data-bg={brandImg1}></div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="gallery-banner-item gallery-banner-item-txt bg-brand">
                            <div className="gallery-banner-txt text-left">
                                <h5 className="mobile-mb-0"><strong>{brandTitleSub1}</strong></h5>
                                <p>{brandTitleSub1Content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="gallery-banner-item bg-img" data-bg={brandImg2}></div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="gallery-banner-item gallery-banner-item-txt bg-secondary">
                            <div className="gallery-banner-txt text-left">
                                <h5 className="text-brand mobile-mb-0"><strong>{brandTitleSub2}</strong></h5>
                                <p className="text-gray">{brandTitleSub2Content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="gallery-banner-item bg-img" data-bg={brandImg3}></div>
                    </div>
                </div>
            </div>
        )

    }
}

export default CompanyBrand;