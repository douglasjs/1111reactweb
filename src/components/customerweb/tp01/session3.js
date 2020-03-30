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

        return (
            <section id="benefit" className="vc_row bg-cover bg-center-bottom pt-10" style={style}>
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
    
                        <div className="lqd-column col-xs-12 col-md-6">
    
                            <div className="liquid-img-group-container">
                                <div className="liquid-img-group-inner">
                                    <div className="liquid-img-group-single" data-reveal="true" data-reveal-options='{"direction":"rl"}'>
                                        <div className="liquid-img-group-img-container liquid-img-group-container-benefit-sm">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"scaleX":1.25,"scaleY":1.25}' data-parallax-to='{"scaleX":1,"scaleY":1}' data-parallax-options='{"overflowHidden":true,"easing":"linear"}'>
                                                <figure>
                                                    <img src={benefitImg} alt="1111人力銀行員工福利" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
        
                        <div className="lqd-column col-xs-12 col-md-6 pl-md-7">
    
                            <div className="ld-fancy-heading benefit-margin-custom line-10 max-hight-410 over-div-hide text-left" dangerouslySetInnerHTML={{__html: benefitContent}}/>
    
                        </div>
    
                    </div>
                </div>
            </section>
       
        )

    }



  

}

export default CompanyBenifit;