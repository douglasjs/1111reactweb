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
        const { positionGrpData} = this.props.positionGrpReducer;
        const { positionData } = this.props.positionReducer;

        let groupName1;
        let groupName2;
        let groupName3;

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
                                                        <a style={style} href={`#${groupName1}`} aria-expanded="false" aria-controls= {groupName1} role="tab" data-toggle="tab"> {groupName1} </a>
                                                    </li>
                                                }
                                                {groupName2 &&
                                                    <li  role="presentation" className="active">
                                                        <a style={style} href={`#${groupName2}`} aria-expanded="false" aria-controls= {groupName2} role="tab" data-toggle="tab"> {groupName2} </a>
                                                    </li>
                                                }
                                                {groupName3 &&
                                                    <li role="presentation" className="active">
                                                        <a style={style} href={`#${groupName3}`} aria-expanded="false" aria-controls= {groupName3} role="tab" data-toggle="tab"> {groupName3} </a>
                                                    </li>
                                                }
                                               
                                            </ul>


                                
                                <div className="tabs-content">
                                    <div id="ld-tab-pane-17" role="tabpanel" className="tabs-pane fade active in">
    
                                        <div className="jobs-table">
    
                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">說明</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>
    
                                            
                                                {Array.isArray(positionData) && positionData.map((element, index) => {

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
                                                                <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
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
    
                                    <div id="ld-tab-pane-18" role="tabpanel" className="tabs-pane fade">
    
                                        <div className="jobs-table">
                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">福利</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>
    
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">業務專員(電商&amp;禮贈品)(中)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">台中市北區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">中/西餐廚師(私廚)(中)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">台中市中區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">電話銷售主任/副理(客服部)(中)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">台中市南區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">外場副理 (山海樓手工台菜餐廳)(中)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">豐原市市區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">清潔人員(中)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">台中市北區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                    <div id="ld-tab-pane-19" role="tabpanel" className="tabs-pane fade">
                                        <div className="jobs-table">
                                            <div className="jobs-table-row header">
                                                <div className="cell">職稱</div>
                                                <div className="cell">薪資</div>
                                                <div className="cell">福利</div>
                                                <div className="cell">地點</div>
                                                <div className="cell"></div>
                                            </div>
    
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">業務專員(電商&amp;禮贈品)(南)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">高雄市三民區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">中/西餐廚師(私廚)(南)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">高雄市小港區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">電話銷售主任/副理(客服部)(南)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">高雄市鳳山區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">外場副理 (山海樓手工台菜餐廳)(南)</div>
                                                <div className="cell" data-title="薪資：">面議（經常性薪資4萬/月含以上）</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">高雄市左營區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="jobs-table-row">
                                                <div className="cell" data-title="職缺：">清潔人員(南)</div>
                                                <div className="cell" data-title="薪資：">面議(經常性薪資4萬/月含以上)</div>
                                                <div className="cell" data-title="福利：">
                                                    <p className="jobs-hide-text">
                                                        其 　他：一、多樣全面的福利項目：
                                                        1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。
                                                        2)醫療保險及健康照護:員工團體保險(包含壽險、意外傷害險、醫療險、癌症險等) 、職災險、員工健康檢查、駐廠醫生服務及各式健康促進活動。
                                                        3)交通往來:免費員工交通車直達大台北與大桃園地區或交通津貼、免費汽機車停車位
                                                        4)各項津貼補助:伙食津貼、生日禮劵、婚喪喜慶補助、員工生育補助
                                                        5)自選式福利方案:每年提供福利點數自由選擇消費如：餐費補助、電影優惠券、飯店住宿券、各式禮卷、生活用品等。另有特約商店及特約旅行社。
                                                        6)眷屬福利:眷屬團保、親子藝文活動、戲劇包場活動、家庭日、特約糼稚園。
                                                    </p>
                                                </div>
                                                <div className="cell" data-title="地點：">高雄市三民區</div>
                                                <div className="cell" data-title="加入：">
                                                    <a href="/#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-18 lh-15 font-weight-bold ltr-sp-05 mb-2">
                                                        <span>
                                                            <span className="btn-txt">應徵</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="text-center mt-20 mb-20">
                                <a href="https://m.1111.com.tw/corp/50750609" className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-primary mb-2" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
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