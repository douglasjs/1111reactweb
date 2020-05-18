import React from 'react';
import TitleSet from '../../sharecomponents/titleset';
import Preview from '../../sharecomponents/managerPreview';
import ManagerTemplateSession1 from './managerTamplateSession1';
import ManagerTemplateSession2 from './managerTamplateSession2';
import ManagerTemplateSession3 from './managerTamplateSession3';
import ManagerTemplateSession4 from './managerTamplateSession4';
import ManagerTemplateSession5 from './managerTamplateSession5';
import ManagerTemplateSession6 from './managerTamplateSession6';
import ManagerTemplateSession7 from './managerTamplateSession7';
import ManagerTemplateSession8 from './managerTamplateSession8';
import ManagerTitle from '../../sharecomponents/managerTitle';

class ManagerTemplate extends React.Component{

    constructor(props){
        super(props);
        this.state={ themeNum: 'tp04'};
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
                <ManagerTemplateSession1 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession2 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession3 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession4 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession5 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession6 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession7 {...this.props} themeNum = {themNum}/>
                <ManagerTemplateSession8 {...this.props} themeNum = {themNum}/>
                <Preview cid={cid} themNum={themNum} />
            </div>
          
        )

    }


}

export default ManagerTemplate;