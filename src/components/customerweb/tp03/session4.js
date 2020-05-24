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
            <div id="jobs" className="testimonial-landing-area custom-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto">
                            <div className="testimonial-content-landing">
                                
                                {Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
                                    let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";

                                    return(
                                
                                <div key={index} className="testimonial-item testimonial-item--2">
                                    <figure className="client-thumb">
                                        <img src="../../../image/tp03/jobs/jobs_logo_01.png" alt="1111人力銀行職缺介紹" />
                                    </figure>

                                    <div className="client-quote">
                                        <h5 className="text-brand">{element.position_name}</h5>
                                    </div>

                                    <div className="client-info">
                                        <h6 className="client-title">{element.position_salary}</h6>
                                        <span className="client-designation">{element.position_workCity}</span>
                                    </div>
                                    <div className="button-item mt-15">
                                        <a target="_blank" href={positionURL} rel="noopener noreferrer" className="btn-brand btn-lg">我要應徵</a>
                                    </div>
                                </div>

                                    )

                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default CompanyJobs;