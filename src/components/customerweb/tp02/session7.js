import React from 'react';

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
            })
        }

        return (

            <section id="faq" className="faq-secttion" style={qaEnable? {} : {display: 'none'}}>
                
                {qaData && qaData.length > 0 &&

                <div className="container">
                    <div className="inner-content">
                        <div className="faq-content">
                            <div className="sec-title centred">
                                <h4 className="m-b-0">FAQ</h4>
                                <h1 >常見問題</h1>
                            </div>
                        </div>
                        <div className="carousel-content centred">
                            <div className="testimonial-carousel owl-carousel owl-theme nav-style-one owl-dots-none">
                                <div className="content-box text-center">
                                    <div className="author-info tp02_pb-1rem">
                                        <span className="designation text-center">Q1.</span>
                                        <h4 className="name text-center">{qa1Title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="text text-center">{qa1Content}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <div className="author-info tp02_pb-1rem">
                                        <span className="designation text-center">Q2.</span>
                                        <h4 className="name text-center">{qa2Title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="text text-center">{qa2Content}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <div className="author-info tp02_pb-1rem">
                                        <span className="designation text-center">Q3.</span>
                                        <h4 className="name text-center">{qa3Title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="text text-center">{qa3Content}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <div className="author-info tp02_pb-1rem">
                                        <span className="designation text-center">Q4.</span>
                                        <h4 className="name text-center">{qa4Title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="text text-center">{qa4Content}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <div className="author-info tp02_pb-1rem">
                                        <span className="designation text-center">Q5.</span>
                                        <h4 className="name text-center">{qa5Title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="text text-center">{qa5Content}</div>
                                        </div>
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

export default CompanyQA;