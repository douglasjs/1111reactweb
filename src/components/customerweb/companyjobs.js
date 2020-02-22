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
        const style = {
            fontSize: '18px'
        }
        const cid = this.props.match.params.cid;
        const { positionGrpData} = this.props.positionGrpReducer;
        const { positionData } = this.props.positionReducer;

        let groupName1;
        let groupName2;
        let groupName3;
        let companyurl = "https://www.1111.com.tw/corp/" + cid;

        if(positionGrpData && positionGrpData.length > 0){
            positionGrpData.forEach( element  => {
                groupName1 = element.groupName1;
                groupName2 = element.groupName2;
                groupName3 = element.groupName3;
            })
        }

        return (
            <section id="jobs" className="vc_row">
                <div className="container">
                    <div className="row">
    
                        <div className="lqd-column">
    
                            <h3 className="text-center">職缺介紹</h3>
    
                            <div className="tabs tabs-nav-centered tabs-nav-items-bordered jobs-nav-active-filled">


                                            <ul className="nav tabs-nav ltr-sp-175 font-weight-bold" role="tablist">
                                                {groupName1 &&
                                                    <li  role="presentation" className="active">
                                                        <a style={style} href='#ld-tab-1' aria-expanded="false" aria-controls= {groupName1} role="tab" data-toggle="tab"> {groupName1} </a>
                                                    </li>
                                                }
                                                {groupName2 &&
                                                    <li  role="presentation">
                                                        <a style={style} href='#ld-tab-2'  aria-expanded="false" aria-controls= {groupName2} role="tab" data-toggle="tab"> {groupName2} </a>
                                                    </li>
                                                }
                                                {groupName3 &&
                                                    <li role="presentation">
                                                        <a style={style} href='#ld-tab-3'  aria-expanded="false" aria-controls= {groupName3} role="tab" data-toggle="tab"> {groupName3} </a>
                                                    </li>
                                                }
                                               
                                            </ul>


                                
                                <div className="tabs-content">
                                    <div id="ld-tab-1" role="tabpanel" className="tabs-pane fade  in">
    
                                        <div className="jobs-table">
    
                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">說明</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>
    
                                            
                                                {Array.isArray(positionData) && positionData.filter( data => data.position_group === "1").map((element, index) => {
                                                    let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";

                                                  return(
                                                        <div key={index} className="jobs-table-row">
                                                            <div className="cell" data-title="職缺：">{element.position_name}</div>
                                                            <div className="cell" data-title="薪資：">{element.position_salary}</div>
                                                            <div className="cell" data-title="說明">
                                                                <p className="jobs-hide-text">
                                                                    {element.position_matter}
                                                                </p>
                                                            </div>
                                                            <div className="cell" data-title="地點："> {element.position_workCity}</div>
                                                            <div className="cell" data-title="加入：">
                                                                <a href={positionURL} target='_blank' rel="noopener noreferrer" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                                    <span>
                                                                        <span className="btn-txt">應徵</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )

                                                })}
                                        </div>
    
                                    </div>
    
                                    <div id="ld-tab-2" role="tabpanel" className="tabs-pane fade in">
    
                                        <div className="jobs-table">

                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">說明</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>

                                            
                                                {Array.isArray(positionData) && positionData.filter( data => data.position_group === "2").map((element, index) => {
                                                    let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";

                                                return(
                                                        <div key={index} className="jobs-table-row">
                                                            <div className="cell" data-title="職缺：">{element.position_name}</div>
                                                            <div className="cell" data-title="薪資：">{element.position_salary}</div>
                                                            <div className="cell" data-title="說明">
                                                                <p className="jobs-hide-text">
                                                                    {element.position_matter}
                                                                </p>
                                                            </div>
                                                            <div className="cell" data-title="地點："> {element.position_workCity}</div>
                                                            <div className="cell" data-title="加入：">
                                                                <a href={positionURL} target='_blank' rel="noopener noreferrer" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                                    <span>
                                                                        <span className="btn-txt">應徵</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )

                                                })}
                                        </div>

                                    </div>

                                    <div id="ld-tab-3" role="tabpanel" className="tabs-pane fade active in">
    
                                        <div className="jobs-table">

                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">說明</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>

                                            
                                                {Array.isArray(positionData) && positionData.filter( data => data.position_group === "3").map((element, index) => {
                                                    let positionURL = "https://www.1111.com.tw/job/"+ element.eNo + "/";

                                                return(
                                                        <div key={index} className="jobs-table-row">
                                                            <div className="cell" data-title="職缺：">{element.position_name}</div>
                                                            <div className="cell" data-title="薪資：">{element.position_salary}</div>
                                                            <div className="cell" data-title="說明">
                                                                <p className="jobs-hide-text">
                                                                    {element.position_matter}
                                                                </p>
                                                            </div>
                                                            <div className="cell" data-title="地點："> {element.position_workCity}</div>
                                                            <div className="cell" data-title="加入：">
                                                                <a href={positionURL} target='_blank' rel="noopener noreferrer" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                                    <span>
                                                                        <span className="btn-txt">應徵</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )

                                                })}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-20 mb-20">
                                <a href={companyurl} target='_blank' rel="noopener noreferrer" className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-primary mb-2" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
                                    <span>
                                        <span className="btn-txt">所有職缺</span>
                                    </span>
                                </a>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
        )

    }

  

}

export default CompanyJobs;