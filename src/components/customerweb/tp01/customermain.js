import React from 'react';
import CompanyTitle from './companytitle';
import CompanyInfo from './companyinfo';
import CompanyBenifit from './companybenifit';
import CompanyJobs from './companyjobs';
import CompanyBrand from './companybrand';
import CompanyCustomize from './companycustomize'
import CompanyQA from './companyqa'
import CompanyContact from './companycontact'
import TitleSet from '../../sharecomponents/titleset';

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
            const cid = this.props.match.params.cid;


            let companyName = '1111人力銀行-' + cid;
            let companyMeta = {
                keywords: '求職,求才,徵才,工作,找工作,求職網,人力銀行,幸福企業',
                description: '找工作送1萬元！前1,000名不必抽、人人有獎，1111推動幸福企業提供高薪、最好的福利等你來，找到工作立即送1萬元大紅包！速分享好友，他拿1萬元，你也有分享獎金1千元'
            }
            let styleSheet = [
                '/assets/tp01/vendors/liquid-icon/liquid-icon.min.css',
                '/assets/tp01/vendors/font-awesome/css/font-awesome.min.css',
                '/assets/tp01/css/theme-vendors.min.css',
                '/assets/tp01/css/theme.min.css',
                '/assets/tp01/css/blue.css',
                '/assets/tp01/css/style.css'
            ]
            let email;
            let themeNum;


            if(data && data.length > 0){
                companyName= data[0].companyName;
                email = data[0].email;
                themeNum =  data[0].themeNum;
                companyMeta = { ...companyMeta,
                    keywords: data[0].keyword,
                    description: data[0].description
                }
                styleSheet[4] = `/assets/tp01/css/${data[0].styleType}`;
            
            }
            
          

            return (
                <main id="content" className="content">
                    <TitleSet title={companyName} meta={companyMeta} style={styleSheet} />
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