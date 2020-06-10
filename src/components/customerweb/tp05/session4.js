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
            <section className="services-area bg-f8f8f8 pb-50 pt-70">
                <div id="jobs" className="container">
                    <div className="section-title">
                    <span className="sub-title">Jobs</span>
                        <h2>職缺介紹</h2>
    
                    </div>
                    <div className="services-slides owl-carousel owl-theme">
                        
                        {Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
                            let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";
                                                    
                            return(

                                <div key={index} className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-team"></i>

                                    </div>

                                    <h3 className="card_height"><a href={positionURL} target="_blank" rel="noopener noreferrer">{element.position_name}</a></h3>

                                    <p className="salary-fmt">{element.position_salary}</p>
                                    <p>{element.position_workCity}</p>
                                
                                    <a target="_blank" rel="noopener noreferrer" href={positionURL} className="default-btn">我要應徵<span></span></a>

                                    <div className="box-shape">
                                        <img src="../../../assets/tp05/img/box-shape1.png" alt="職缺介紹" />
                                        <img src="../../../assets/tp05/img/box-shape1g.png" alt="職缺介紹" />
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