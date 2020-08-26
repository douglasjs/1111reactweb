import React from 'react';

class CompanyJobs extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getPositionList(cid, this.props.themeNum);
        this.props.getPositionGrpList(cid, this.props.themeNum);
    }

    render(){
		const { positionData } = this.props.positionReducer;

        return (
            <section id="jobs" className="service-style-three gray-bg centred">
                <div className="anim-icon">
                    <div className="icon icon-1"></div>
                    <div className="icon icon-2 rotate-me"></div>
                    <div className="icon icon-3 float-bob-y"></div>
                    <div className="icon icon-4 float-bob-x"></div>
                    <div className="icon icon-5"></div>
                    <div className="icon icon-6 rotate-me"></div>
                </div>
                <div className="container">
                    <div className="sec-title">
                        <h4>Jobs</h4>
                        <h1>職缺介紹</h1>
                    </div>                   
                    <div className="three-column-carousel owl-carousel owl-theme owl-nav-none">

                        {Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
									let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";
															
									return(

                        <div key={index} className="service-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="flaticon-digital-marketing"></i></div>
                                <h4><a href={positionURL}>{element.position_name}</a></h4>
                                <div className="text benefit-hide-text"><p>{element.position_workCity}</p></div>
                                <div className="text benefit-hide-text"><p>{element.position_salary}</p></div>
                                <div className="text benefit-hide-text"><p>{element.position_experience} │ {element.position_grade}</p></div>
                                <div className="btn-box p-t-20"><a className="btn-style-three" target="_blank" rel="noopener noreferrer" href={positionURL}>我要應徵</a></div>
                            </div>
                        </div>

                            )

						})}

                    </div>
                </div>
            </section>
        )

    }
}

export default CompanyJobs;