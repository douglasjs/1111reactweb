import React from 'react';
import envConfig from '../../../config/env';

class CompanyBenifit  extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getbenefitList(cid, this.props.themeNum);
    }

    render(){
        const { benefitData } = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();
        
        let benefitContent;
        let benefitImg;

        if(benefitData && benefitData.length > 0){
            benefitData.forEach(element => {
                benefitContent =  element.benefitContent;
                benefitImg = element.benefitImg;
            })
        }

        // image
        benefitImg = !benefitImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        const style = {
            'backgroundImage' : 'url(/assets/tp01/img/benefit-bg_blue.png)'
        }
        const styleImg = {};

        return (
            <section id="benefit" className="vc_row bg-cover bg-center-bottom pt-10 pb-3 benefit_pt-768" style={style}>
                {benefitData && benefitData.length > 0 &&
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
    
                        <div className="lqd-column col-xs-12 col-md-6">
    
                            <div className="liquid-img-group-container">
                                <div className="liquid-img-group-inner">
                                    <div className="liquid-img-group-single" data-reveal="true" data-reveal-options='{"direction":"rl"}'>
                                        <div className="liquid-img-group-img-container liquid-img-group-container-benefit-sm">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"scaleX":1.25,"scaleY":1.25}' data-parallax-to='{"scaleX":1,"scaleY":1}' data-parallax-options='{"overflowHidden":true,"easing":"linear"}'>
                                                <figure>
                                                    <img src={benefitImg} style={styleImg} alt="1111人力銀行員工福利" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
        
                        <div className="lqd-column col-xs-12 col-md-6 pl-md-7">

                            <div className="ld-fancy-heading benefit-margin-custom text-left benefit_mb-768">
                                <h2 className="text-black" data-text-rotator="true">
                                    <span className="ld-fh-txt">員工福利</span>
                                </h2>
                                
                                <div className="ld-fancy-heading tp01_line-10 benefit-max-hight over-div-hide text-left" dangerouslySetInnerHTML={{__html: benefitContent}}/>
                            </div>

                        </div>
    
                    </div>
                </div>
                }
            </section>
       
        )

    }



  

}

export default CompanyBenifit;