﻿import React from 'react';
import validation from '../../sharecomponents/validation';
//import envConfig from '../../../config/env';

class CompanyContact extends React.Component {


    constructor(props){
        super(props);
        this.state={
           sentMail: false,
           custName: "",
           custMobile: "",
           custMsg: "",
           custMail: ""
        };
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.custName = React.createRef();
        this.custMsg = React.createRef();
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
        
        this.setState({...this.state, sentMail : false});
        if( validation('custName', this.state.custName,this) 
            && validation('custMail', this.state.custMail,this) 
            && validation('custMobile', this.state.custMobile,this) 
            && validation('custMsg', this.state.custMsg,this) 
            && data && data.length > 0){
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
           
            let promise = new Promise((resolve) => {
                this.setState({...this.state, sentMail : true});
            });
            promise.then( (val) => console.log("asynchronous logging has val:",val) );
            this.props.getEmail(emailObj, this);
        }
        
    }

    render(){
        //const cid = this.props.match.params.cid.trim();
        const { contactData} = this.props.contactReducer;
        //const { email_data } = this.props.emailReducer;
       

        let contactEnable;

        //const emailMsg = email_data && email_data.length > 0 ? email_data[0].msg : ""; 


        if(contactData && contactData.length > 0){
            contactData.forEach(element => {
                contactEnable =  element.contactEnable;
            })
        }

        return (
            <section className="faq-contact-area pb-10 pt-0" style={contactEnable? {} : {display: 'none'}}>
                <div id="contact" className="container">
                    <div className="section-title">
                        <span className="sub-title">Message Us</span>
                        <h2>聯絡我們</h2>                
                    </div>
                    {/*
                    <div className="section-title">
                        <h2>{emailMsg}</h2>                
                    </div>
                    */}
                    <div className="faq-contact-form">
                        <form method="post" noValidate>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="姓名" onChange={this.handleChange('custName')} value={this.state.custName}  ref={this.custName}/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="您的信箱" onChange={this.handleChange('custMail')} value={this.state.custMail}  ref={this.emailInput}/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="電話" onChange={this.handleChange('custMobile')} value={this.state.custMobile} ref={this.phoneInput}/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="訊息" onChange={this.handleChange('custMsg')} value={this.state.custMsg}  ref={this.custMsg}></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    {/*<button type="submit" className="default-btn" onClick={this.habdleSubmit}> 送出 <span></span></button>*/}
                                    <input className="default-btn tp05_hover-btn" type="submit" value="送出" onClick={this.habdleSubmit}  disabled={this.state.sentMail}/>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="bg-map"><img src="../../../assets/tp05/img/bg-map.png" alt="連絡我們" /></div>
            </section>
    
        )

    }
}

export default CompanyContact;