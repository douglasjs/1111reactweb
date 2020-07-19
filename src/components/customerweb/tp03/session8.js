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

        return (
            <div id="contact" className="finance-contact-area" style={contactEnable? {} : {display: 'none'}}>
                <div className="contact-request-area">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-xl-5">
                            <div className="requested-thumb bg-img" data-bg={contactImg}></div>
                        </div>
                        <div className="col-lg-9 col-xl-7">
                            <div className="requested-content-wrap pt-30 bg-secondary">
                                <div className="requested-content-inner">
                                    <div className="requested-content-header text-left">
                                        <h5 className="text-white">Contact</h5>
                                        <h4 className="font-weight-bold">聯絡我們</h4>
                                        {/*<h4 className="font-weight-bold">{emailMsg}</h4>*/}
                                    </div>
                                    <div className="contact-form-wrap pt-30 pb-30">
                                        <form id="contact-form" method="post">
                                            <div className="contact-from-content mtn-70 mtn-sm-30">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-input-item light">
                                                            <input type="text" name="con_name" placeholder="姓名" required onChange={this.handleChange('custName')} value={this.state.custName} />
                                                        </div>
                                                    </div>                                                
                                                    <div className="col-md-6">
                                                        <div className="form-input-item light">
                                                            <input type="text" name="con_phone" placeholder="連絡電話" onChange={this.handleChange('custMobile')} value={this.state.custMobile} ref={this.phoneInput} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-input-item light">
                                                            <input type="email" name="con_email" placeholder="電子郵件" onChange={this.handleChange('custMail')} value={this.state.custMail} ref={this.emailInput} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-end">
                                                    <div className="col-lg-12">
                                                        <div className="form-input-item light">
                                                            <label htmlFor="message" className="sr-only">Message</label>
                                                            <textarea name="con_message" id="message" cols="30" rows="4" placeholder="您的訊息" required onChange={this.handleChange('custMsg')} value={this.state.custMsg} ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="form-input-item light mt-i-30 text-left">
                                                            <button className="btn btn-brand2" onClick={this.habdleSubmit} >送出</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-message"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    
        )

    }
}

export default CompanyContact;