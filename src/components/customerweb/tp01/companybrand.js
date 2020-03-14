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
        let brandTitleSub1;
        let brandTitleSub1Content;
        let brandTitleSub2;
        let brandTitleSub2Content;
        let brandTitleSub3;
        let brandTitleSub3Content;
        let brandImg;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
                brandTitle =  element.brandTitle;
                brandTitleSub1 = element.brandTitleSub1;
                brandTitleSub1Content = element.brandTitleSub1Content;
                brandTitleSub2 = element.brandTitleSub2;
                brandTitleSub2Content = element.brandTitleSub2Content;
                brandTitleSub3 = element.brandTitleSub3;
                brandTitleSub3Content = element.brandTitleSub3Content;
                brandImg = element.brandImg;
            })
        }

        // image
        brandImg = !brandImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        const style = {
            maxHeight: '500px'
        }
    
        return (
            <section id="brand" className="vc_row pt-30 pb-30 bg-gray">
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column col-lg-6">
    
                            <h2
                                className="font-size-38 lh-13 mt-0 mb-30 line-1 text-left"
                                data-split-text="true"
                                data-split-options='{"type":"lines"}'
                                data-text-rotator="true"
                            >
                                {brandTitle}
    
                            </h2>
    
                            <div className="accordion accordion-md accordion-title-underlined accordion-expander-left accordion-active-color-primary" id="vc_accordion_5c77a7f9d2896" role="tablist">
                                <div className="accordion-item panel active">
                                    <div className="accordion-heading" role="tab" id="heading_accordion-1">
                                        <h4 className="accordion-title font-size-17 lh-15 line-1 text-left">
                                            <a data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-1" aria-expanded="true" aria-controls="accordion-1">
                                                {brandTitleSub1}
                                                <span className="accordion-expander">
                                                    <i className="fa fa-angle-down"></i>
                                                    <i className="fa fa-angle-up"></i>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="accordion-1" className="accordion-collapse collapse in" role="tabpanel" aria-labelledby="heading_accordion-1">
                                        <div className="accordion-content">
                                            <p className="line-5 text-left">{brandTitleSub1Content}</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item panel">
                                    <div className="accordion-heading" role="tab" id="heading_accordion-2">
                                        <h4 className="accordion-title font-size-17 lh-15 line-1 text-left">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-2" aria-expanded="false" aria-controls="accordion-2">
                                                {brandTitleSub2}
                                                <span className="accordion-expander">
                                                    <i className="fa fa-angle-down"></i>
                                                    <i className="fa fa-angle-up"></i>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="accordion-2" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading_accordion-2">
                                        <div className="accordion-content">
                                            <p className="line-5 text-left">{brandTitleSub2Content}</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item panel">
                                    <div className="accordion-heading" role="tab" id="heading_accordion-3">
                                        <h4 className="accordion-title font-size-17 lh-15 line-1 text-left">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-3" aria-expanded="false" aria-controls="accordion-3">
                                                {brandTitleSub3}
                                                <span className="accordion-expander">
                                                    <i className="fa fa-angle-down"></i>
                                                    <i className="fa fa-angle-up"></i>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="accordion-3" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading_accordion-3">
                                        <div className="accordion-content">
                                            <p className="line-5 text-left">{brandTitleSub3Content}</p>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
    
                        </div>
    
                        <div className="lqd-column col-xs-12 col-lg-6">
    
                            <div className="liquid-img-group-container">
                                <div className="liquid-img-group-inner">
                                    <div className="liquid-img-group-single" data-reveal="true" data-reveal-options='{"direction":"lr"}'>
                                        <div className="liquid-img-group-img-container">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"scaleX":1.25,"scaleY":1.25}' data-parallax-to='{"scaleX":1,"scaleY":1}' data-parallax-options='{"overflowHidden":true,"easing":"linear"}'>
                                                <figure>
                                                    <img src={brandImg} alt="1111人力銀行品牌介紹" style={style} />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </div>
            </section>
        )
    }


}

export default CompanyBrand;