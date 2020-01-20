import React from 'react';
import CompanyTitle from './companytitle';
import CompanyInfo from './companyinfo';
import CompanyBenifit from './companybenifit';
import CompanyJobs from './companyjobs';
import CompanyBrand from './companybrand';
import CompanyCustomize from './companycustomize'
import CompanyQA from './companyqa'
import CompanyContact from './companycontact'

class CustomerMain extends React.Component{

        constructor(props){
            super(props);
            this.state={};
        }

        componentDidMount(){
            const cid = this.props.match.params.cid;
            this.props.getDataList(cid);
        }

        render(){
            const { data } = this.props.datatableReducer;
            let email;
            let themeNum;

            if(data && data.length > 0){
                data.forEach(element => {
                    email = element.email;
                    themeNum =  element.themeNum;
                })
            }
            return (
                <main id="content" className="content">
                    <CompanyTitle themeNum={themeNum} {...this.props}/>
                    <CompanyInfo themeNum={themeNum} {...this.props}/>
                    <CompanyBenifit themeNum={themeNum} {...this.props}/>
                    <CompanyJobs themeNum={themeNum} {...this.props}/>
                    <CompanyBrand themeNum={themeNum} {...this.props}/>
                    <CompanyCustomize themeNum={themeNum} {...this.props}/>
                    <CompanyQA themeNum={themeNum} {...this.props}/>
                    <CompanyContact themeNum={themeNum} email={email} {...this.props} />
                </main>
            )
        }
}

export default CustomerMain;