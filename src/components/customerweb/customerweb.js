import React from 'react';
import TitleSet from '../sharecomponents/titleset';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
//import useScript from '../sharecomponents/usescript';


class CustomerWeb extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }
    
    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
    }

    render(){
        //const cid = this.props.match.params.cid;
        const { data } = this.props.datatableReducer;
     
        let description = this.state.description;
        let keyword = this.state.keyword ;
        let title = this.state.title;
        let styleType = this.state.styleType;    
        
        if(data && data.length > 0){
            data.forEach(element => {
                description =  element.description;
                keyword = element.keyword;
                title = element.title;
                styleType = element.styleType;
            })
        }

        //const cid = props.match ? props.match.params.cid : props.cid ? props.cid : '' ;
        const webTitle = '1111人力銀行-' + title;
        const companyMeta = {
            keywordsMeta: keyword,
            descriptionMeta: description
        }
        const styleSheet = [
            '/assets/vendors/liquid-icon/liquid-icon.min.css',
            '/assets/vendors/font-awesome/css/font-awesome.min.css',
            '/assets/css/theme-vendors.min.css',
            '/assets/css/theme.min.css',
            '/assets/css/' + styleType
        ]
        const script = ['/assets/vendors/modernizr.min.js','/assets/vendors/jquery.min.js'];

        /*const URL = [
            '/assets/vendors/jquery.min.js',
            '/assets/js/theme-vendors.js',
            '/assets/js/theme.min.js',
            '/assets/js/liquidAjaxContactForm.min.js',
            '/assets/js/liquidAjaxMailchimp.min.js',
            '/assets/js/goTopButton.js'
        ]

        useScript(URL);*/


        return (
            
            <div>
                <TitleSet title={webTitle} meta={companyMeta} style={styleSheet} script={script} />
                <div id="wrap">
                    <CustomerHeader {...this.props}/>
                    <CustomerMain {...this.props}/>
                    <CustomerFoot {...this.props}/>
                </div>
                <a className="top-link-icon hide" href="/#" id="js-top-icon"><i className="fa fa-angle-up"></i></a>
                <a className="top-link hide" href="/#" id="js-top">
                    <img src="assets/img/join_icon_blue.png" alt="立即應徵" />
                </a>

                <script src="assets/vendors/jquery.min.js"></script>
                <script src="assets/js/theme-vendors.js"></script>
                <script src="assets/js/theme.min.js"></script>
                <script src="assets/js/liquidAjaxContactForm.min.js"></script>
                <script src="assets/js/liquidAjaxMailchimp.min.js"></script>
                <script src="assets/js/goTopButton.js"></script>
            </div>    
        
        )
    }
}

export default CustomerWeb;
