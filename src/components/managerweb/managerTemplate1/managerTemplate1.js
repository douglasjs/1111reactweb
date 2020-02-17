import React from 'react';
import TitleSet from '../../sharecomponents/titleset';
import ManagerTemplate1Session1 from './managerTamplate1Session1';
import ManagerTemplate1Session2 from './managerTamplate1Session2';
import ManagerTemplate1Session3 from './managerTamplate1Session3';
import ManagerTemplate1Session4 from './managerTamplate1Session4';
import ManagerTemplate1Session5 from './managerTamplate1Session5';
import ManagerTemplate1Session6 from './managerTamplate1Session6';
import ManagerTemplate1Session7 from './managerTamplate1Session7';
import ManagerTemplate1Session8 from './managerTamplate1Session8';

class ManagerTemplate1 extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
        this.props.getCompanyList(cid, 'tp01');
        this.props.getintroductionList(cid, 'tp01');
        this.props.getbenefitList(cid, 'tp01');
        this.props.getbrandList(cid, 'tp01');
        this.props.getcustomizeList(cid, 'tp01');
        this.props.getqaList(cid, 'tp01');
        this.props.getcontactList(cid, 'tp01');
        this.props.getPositionList(cid, 'tp01');
        this.props.getPositionGrpList(cid, 'tp01');
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
    

        if(data && data.length > 0){
            companyName= data[0].companyName;
            companyMeta = {
                keywords: data[0].keywords,
                description: data[0].description
            }
        }
    
        
        return(
            <div className="container-fluid">
                 <TitleSet title={companyName} meta={companyMeta} />
                <ManagerTemplate1Session1 {...this.props}/>
                <ManagerTemplate1Session2 {...this.props}/>
                <ManagerTemplate1Session3 {...this.props}/>
                <ManagerTemplate1Session4 {...this.props}/>
                <ManagerTemplate1Session5 {...this.props}/>
                <ManagerTemplate1Session6 {...this.props}/>
                <ManagerTemplate1Session7 {...this.props}/>
                <ManagerTemplate1Session8 {...this.props}/>
                <a href={`/${cid}`} target='_blank'rel="noopener noreferrer"><button className='btn btn-primary'>預覽畫面</button></a>
            </div>
          
        )

    }


}

export default ManagerTemplate1;