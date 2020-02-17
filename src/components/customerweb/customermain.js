import React from 'react';
import CompanyTitle from './companytitle';
import CompanyInfo from './companyinfo';
import CompanyBenifit from './companybenifit';
import CompanyJobs from './companyjobs';
import CompanyBrand from './companybrand';
import CompanyCustomize from './companycustomize'
import CompanyQA from './companyqa'
import CompanyContact from './companycontact'
import TitleSet from '../sharecomponents/titleset';

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
                keywords: '1111,永豐餘生技,人力,徵才',
                description: '永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。&nbsp;1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。'
            }
            let styleSheet = [
                '/assets/vendors/liquid-icon/liquid-icon.min.css',
                '/assets/vendors/font-awesome/css/font-awesome.min.css',
                '/assets/css/theme-vendors.min.css',
                '/assets/css/theme.min.css',
                '/assets/css/blue.css'
            ]
            let email;
            let themeNum;


            if(data && data.length > 0){
                companyName= data[0].companyName;
                email = data[0].email;
                themeNum =  data[0].themeNum;
                companyMeta = {
                    keywords: data[0].keywords,
                    description: data[0].description
                }
                styleSheet[4] = `/assets/css/${data[0].styleType}`
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