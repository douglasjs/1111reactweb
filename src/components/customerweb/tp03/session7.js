import React from 'react';
import envConfig from '../../../config/env';

class CompanyQA extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getqaList(cid, this.props.themeNum);
    }

    render(){
        const cid = this.props.match.params.cid.trim();
        const { qaData } = this.props.qaReducer;

        let qaEnable;
        let qa1Title;
        let qa1Content;
        let qa2Title;
        let qa2Content;
        let qa3Title;
        let qa3Content;
        let qaImg;

        if(qaData && qaData.length > 0){
            qaData.forEach(element => {
                qaEnable =  element.qaEnable;
                qa1Title = element.qa1Title;
                qa1Content = element.qa1Content;
                qa2Title = element.qa2Title;
                qa2Content = element.qa2Content;
                qa3Title = element.qa3Title;
                qa3Content = element.qa3Content;
                qaImg = element.qaImg;
            })
        }

        // image
        qaImg = !qaImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${qaImg}`;

        return (

            <div id="faq" className="faq-area-wrapper img-h-w-wrap sp-y-custom" style={qaEnable? {} : {display: 'none'}}>
                
                {qaData && qaData.length > 0 && <div>

                <div className="img-half-width right bg-img-nr" data-bg={qaImg}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-content-wrap">
                                <div className="section-title text-left">
                                    <h5>FAQ</h5>
                                    <h4 className="font-weight-bold">常見問題</h4>
                                </div>
                                
                                <div className="accordion mt-lg-0 my-4 my-md-5" id="accordionFaq">
                                    <div className="card text-left">
                                        <div className="card-header">
                                            <h4 data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">{qa1Title}</h4></div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordionFaq">
                                            <div className="card-body">
                                                <p>{qa1Content}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-left">
                                        <div className="card-header">
                                            <h4 data-toggle="collapse" data-target="#collapseTwo">{qa2Title}</h4></div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordionFaq">
                                            <div className="card-body">
                                                <p>{qa2Content}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card text-left">
                                        <div className="card-header">
                                            <h4 data-toggle="collapse" data-target="#collapseThree">{qa3Title}</h4>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordionFaq">
                                            <div className="card-body">
                                                <p>{qa3Content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>}

            </div>
        )

    }
}

export default CompanyQA;