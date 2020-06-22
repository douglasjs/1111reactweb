import React from 'react';
import envConfig from '../../../config/env';
import validation from '../../sharecomponents/validation';

class CompanyContact extends React.Component {

    constructor(props){
        super(props);
        this.state={
           sentMail: true,
           custName: "",
           custMobile: "",
           custMsg: "",
           custMail: ""
        };
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getkind01(cid);
        this.props.getcontactList(cid, this.props.themeNum);
    }

    handleChange = name => event => {
        if(name === "sentMail"){
            this.setState({...this.state, [name]: true});
        }else{
            this.setState({...this.state, [name]: event.target.value});
        }
    }

    habdleSubmit = (event) => {
        event.preventDefault();
        const { data } = this.props.datatableReducer;
        const { kind01_data } = this.props.kind01Reducer;
        

        if(validation('custMail', this.state.custMail)!==""){
            alert(validation('custMail', this.state.custMail));
            this.emailInput.current.focus();
            return;
        }

        if(validation('custMobile', this.state.custMobile)!==""){
            alert(validation('custMobile', this.state.custMobile));
            this.phoneInput.current.focus();
            return;
        }

        if(data && data.length > 0){
            const emailObj = {
                oNo: this.props.match.params.cid.trim(),
                kind: "2",
                oMail: data[0].email,
                csMail:kind01_data[0].Service[2],
                Subject: "1111 中繼頁聯絡我們",
                custName: this.state.custName,
                custMobile: this.state.custMobile,
                custMsg: this.state.custMsg,
                custMail: this.state.custMail
            }
            this.props.getEmail(emailObj);
            this.setState({...this.state, sentMail : false});
        }

    }


    render(){
        const cid = this.props.match.params.cid.trim();
        const { contactData} = this.props.contactReducer;
        //const { email_data } = this.props.emailReducer;
       

        let contactEnable;
        let contactImg;

        //const emailMsg = email_data && email_data.length > 0 ? email_data[0].msg : ""; 


        if(contactData && contactData.length > 0){
            contactData.forEach(element => {
                contactEnable =  element.contactEnable;
                contactImg = element.contactImg;
            })
        }

        // image
        contactImg = !contactImg ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${contactImg}`;

        const style = {
            backgroundImage: 'url('+ contactImg + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }

        return (
            <section id="contact" className="vc_row bg-cover bg-center" style={contactEnable? {} : {display: 'none'}}>
                <div className="alert alert-primary" role="alert" hidden={this.state.sentMail}>
                    <strong>聯絡我們:{/*{emailMsg}*/} &nbsp;</strong> 
                    <button type="button" className="close" onClick={this.handleChange("sentMail")}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex flex-wrap align-items-stretch  box-shadow-3 " style={style}>
                        <div className="lqd-column col-md-6 col-xs-12 px-0 pt-20 pb-10" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"120","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":30,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>
    
                            <div className="row">
                                <div className="lqd-column col-lg-6 col-md-10 col-lg-offset-3 col-md-offset-1 px-5">
                                    <header className="fancy-title fancy-title-1111">
                                        <h2 className="mb-1">聯絡我們</h2>
                                        <p className="mt-0">有任何問題歡迎與我們聯繫</p>
                                    </header>
    
                                        <div className="contact-form contact-form-inputs-filled contact-form-button-block font-size-14 pt-10">
                                        <form method="post" noValidate>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input className="bg-white border-fade-black-03" type="text" name="name" aria-required="true" aria-invalid="false" placeholder="姓名" onChange={this.handleChange('custName')} value={this.state.custName} required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input className="bg-white border-fade-black-03" type="tel" name="mobile" aria-required="true" aria-invalid="false" placeholder="電話" onChange={this.handleChange('custMobile')} value={this.state.custMobile} required  ref={this.emailInput} />
                                                    </div>
                                                    <div className="col-md-12">
                                                            <input className="bg-white border-fade-black-03" type="email" name="email" aria-required="true" aria-invalid="false" placeholder="Email" onChange={this.handleChange('custMail')} value={this.state.custMail} required  ref={this.phoneInput} />
                                                    </div>
                                                        
                                                    <div className="col-md-12">
                                                                <textarea className="bg-white border-fade-black-03" cols="10" rows="3" name="message" aria-required="true" aria-invalid="false" placeholder="訊息" onChange={this.handleChange('custMsg')} value={this.state.custMsg} required></textarea>
                                                            </div>
                                                    <div className="col-md-12 text-md-right">
                                                                <input className="font-weight-bold font-size-14 ltr-sp-1" type="submit" value="送出" onClick={this.habdleSubmit} />
                                                    </div>
                                                </div>
                                            </form>
                                                        <div className="contact-form-result hidden"></div>
                                        </div>
                                    </div>
                                </div>
                
                        </div>
                    
                    </div>
                </div>
            </section>
     
        )
    }


}

export default CompanyContact;