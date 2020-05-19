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
        let qa4Title;
        let qa4Content;
        let qa5Title;
        let qa5Content;
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
                qa4Title = element.qa4Title;
                qa4Content = element.qa4Content;
                qa5Title = element.qa5Title;
                qa5Content = element.qa5Content;
                qaImg = element.qaImg;
            })
        }

        // image
        qaImg = !qaImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${qaImg}`;

        return (

            <section className="faq-area pb-50" style={qaEnable? {} : {display: 'none'}}>

                {qaData && qaData.length > 0 &&

                <div id="faq" className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="faq-image">
                                <img src={qaImg} alt="常見問題" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="faq-accordion text-left">
                                <span className="sub-title">Frequently Asked Questions</span>
                                <h2>常見問題</h2>

                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="/#">
                                            <i className="fas fa-plus"></i>
                                            {qa1Title}
                                        </a>

                                        <p className="accordion-content show">{qa1Content}</p>
                                    </li>
                                    
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="/#">
                                            <i className="fas fa-plus"></i>
                                            {qa2Title}
                                        </a>

                                        <p className="accordion-content">{qa2Content}</p>
                                    </li>
                                    
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="/#">
                                            <i className="fas fa-plus"></i>
                                            {qa3Title}
                                        </a>

                                        <p className="accordion-content">{qa3Content}</p>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title" href="/#">
                                            <i className="fas fa-plus"></i>
                                            {qa4Title}
                                        </a>

                                        <p className="accordion-content">{qa4Content}</p>
                                    </li>
                                    
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="/#">
                                            <i className="fas fa-plus"></i>
                                            {qa5Title}
                                        </a>

                                        <p className="accordion-content">{qa5Content}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                }

            </section>
        )

    }
}

export default CompanyQA;