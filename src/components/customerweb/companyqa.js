﻿import React from 'react';

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

        const style = qaEnable ? {backgroundImage: 'url(image/bg-1-faq.jpg)'} : {display: 'none'};

        return (
    
            <section id="faq" className="faq-padding-custom bg-cover box-shadow-3" style={style}>
    
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column col-md-12">
    
                            <div className="carousel-container carousel-nav-left px-md-5 mx-md-5">
    
    
                                <div className="row" >
    
    
                                    <div className="col-md-2 col-xs-6 col-xs-offset-3 col-md-offset-0 mb-4 mb-md-0 faq-hidden"></div>
    
                                    <div className="col-md-10 col-xs-12 pl-md-4">
    
                                        <div className="img-mask-custom carousel-items row testimonials-quotes row carousel-quotes-1 carousel-nav-light carousel-nav-hover-light carousel-nav-border-none " data-lqd-flickity='{ "prevNextButtons": true, "navStyle": 1, "navOffsets": { "nav": { "left": 15 } }, "rightToLeft": true }'>
    
                                            <div className="col-xs-12">
                                                <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                    <div className="testimonial-quote">
                                                        <h6 className="mt-30 font-size-20 text-white">{qa1Title}</h6>
                                                        <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                                <p>{qa1Content}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                    <div className="testimonial-quote">
                                                        <h6 className="mt-30 font-size-20 text-white">{qa2Title}</h6>
                                                        <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                            <p>{qa2Content}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div className="col-xs-12">
                                                <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                    <div className="testimonial-quote">
                                                        <h6 className="mt-30 font-size-20 text-white">{qa3Title}</h6>
                                                        <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                            <p>{qa3Content}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                    <div className="testimonial-quote">
                                                        <h6 className="mt-30 font-size-20 text-white">{qa4Title}</h6>
                                                        <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                            <p>{qa4Content}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                    <div className="testimonial-quote">
                                                        <h6 className="mt-30 font-size-20 text-white">{qa5Title}</h6>
                                                        <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                            <p>{qa5Content}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
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

export default CompanyQA;