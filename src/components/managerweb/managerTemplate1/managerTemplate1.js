import React from 'react';
import TitleSet from '../../sharecomponents/titleset';
import Preview from '../../sharecomponents/managerPreview';
import ManagerTemplate1Session1 from './managerTamplate1Session1';
import ManagerTemplate1Session2 from './managerTamplate1Session2';
import ManagerTemplate1Session3 from './managerTamplate1Session3';
import ManagerTemplate1Session4 from './managerTamplate1Session4';
import ManagerTemplate1Session5 from './managerTamplate1Session5';
import ManagerTemplate1Session6 from './managerTamplate1Session6';
import ManagerTemplate1Session7 from './managerTamplate1Session7';
import ManagerTemplate1Session8 from './managerTamplate1Session8';
import ManagerTitle from '../../sharecomponents/managerTitle';

class ManagerTemplate1 extends React.Component{

    constructor(props){
        super(props);
        this.state={ themeNum: 'tp01'};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
        this.props.getCompanyList(cid,  this.state.themeNum);
        this.props.getintroductionList(cid,  this.state.themeNum);
        this.props.getbenefitList(cid,  this.state.themeNum);
        this.props.getbrandList(cid,  this.state.themeNum);
        this.props.getcustomizeList(cid,  this.state.themeNum);
        this.props.getqaList(cid,  this.state.themeNum);
        this.props.getcontactList(cid,  this.state.themeNum);
        this.props.getPositionList(cid,  this.state.themeNum);
        this.props.getPositionGrpList(cid,  this.state.themeNum);
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
        let themNum = this.state.themeNum;
        
        if(data && data.length > 0){
            companyName= data[0].companyName;
            companyMeta = {
                keywords: data[0].keywords,
                description: data[0].description
            }
            if(!themNum || themNum.length ===0 ){
                themNum = data[0].themeNum;
            }
        }
    
        return(
            <div className="container-fluid">
                <TitleSet title={companyName} meta={companyMeta} />
                <ManagerTitle themeNum={themNum}/>
                <ManagerTemplate1Session1 {...this.props}/>
                <ManagerTemplate1Session2 {...this.props}/>
                <ManagerTemplate1Session3 {...this.props}/>
                <ManagerTemplate1Session4 {...this.props}/>
                <ManagerTemplate1Session5 {...this.props}/>
                <ManagerTemplate1Session6 {...this.props}/>
                <ManagerTemplate1Session7 {...this.props}/>
                <ManagerTemplate1Session8 {...this.props}/>
                <Preview cid={cid} themNum={themNum} />
            </div>
        )

    }


}

export default ManagerTemplate1;