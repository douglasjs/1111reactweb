import React from 'react';
import TitleSet from '../../sharecomponents/titleset';
import Preview from '../../sharecomponents/managerPreview';
import ManagerTemplate2Session1 from './managerTamplate2Session1';
import ManagerTemplate2Session2 from './managerTamplate2Session2';
import ManagerTemplate2Session3 from './managerTamplate2Session3';
import ManagerTemplate2Session4 from './managerTamplate2Session4';
import ManagerTemplate2Session5 from './managerTamplate2Session5';
import ManagerTemplate2Session6 from './managerTamplate2Session6';
import ManagerTemplate2Session7 from './managerTamplate2Session7';
import ManagerTemplate2Session8 from './managerTamplate2Session8';

class ManagerTemplate2 extends React.Component{

    constructor(props){
        super(props);
        this.state={ themeNum: 'tp02'};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
        this.props.getCompanyList(cid, this.state.themeNum);
        this.props.getintroductionList(cid, this.state.themeNum);
        this.props.getbenefitList(cid, this.state.themeNum);
        this.props.getbrandList(cid, this.state.themeNum);
        this.props.getcustomizeList(cid, this.state.themeNum);
        this.props.getqaList(cid, this.state.themeNum);
        this.props.getcontactList(cid, this.state.themeNum);
        this.props.getPositionList(cid, this.state.themeNum);
        this.props.getPositionGrpList(cid, this.state.themeNum);
        this.props.getkind00(cid);
        this.props.getkind01(cid);
    }

    render(){
      
        const cid = this.props.match.params.cid;
        const { data } = this.props.datatableReducer;

        let companyName = '1111人力銀行';
        let companyMeta = {
            keywords: '1111,人力,徵才',
            description: '1111人力銀行'
        }
        let themeNum = this.state.themeNum;
        
        if(data && data.length > 0){
            companyName= data[0].companyName;
            companyMeta = {
                keywords: data[0].keywords,
                description: data[0].description
            }
            //themNum = data[0].themeNum;
        }
    
        
        return(
            <div className="container-fluid">
                 <TitleSet title={companyName} meta={companyMeta} />
                <ManagerTemplate2Session1 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session2 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session3 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session4 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session5 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session6 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session7 themeNum={themeNum} {...this.props}/>
                <ManagerTemplate2Session8 themeNum={themeNum} {...this.props}/>
                <Preview cid={cid} themNum={themeNum} />
            </div>
          
        )

    }


}

export default ManagerTemplate2;