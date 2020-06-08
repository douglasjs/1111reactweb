import React from 'react';
import validation from '../../sharecomponents/validation';
//import envConfig from '../../../config/env';

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
        //const cid = this.props.match.params.cid.trim();
        const { contactData} = this.props.contactReducer;
        const { email_data } = this.props.emailReducer;
       

        let contactEnable;

        const emailMsg = email_data && email_data.length > 0 ? email_data[0].msg : ""; 


        if(contactData && contactData.length > 0){
            contactData.forEach(element => {
                contactEnable =  element.contactEnable;
            })
        }

        let imgURL = "url(image/tp02/background/testimonial-bg.png)";

        return (
            <div style={contactEnable? {} : {display: 'none'}}>

            <section id="contact" className="contact-section" style={{backgroundImage: imgURL}}>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                            <div className="contact-form-area">
                                <div className="sec-title centred">
                                    <h4 className="m-b-0">Contact</h4>
                                    <h1>聯絡我們</h1>
                                    <h1>{emailMsg}</h1>
                                </div>

                                <form method="post" id="register_form" className="default-form"> 
                                    <div className="row p-t-20">
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="姓名*" required data-error="格式錯誤" onChange={this.handleChange('custName')} value={this.state.custName} />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="電子郵件*" data-error="郵件格式錯誤" required onChange={this.handleChange('custMail')} value={this.state.custMail}  ref={this.emailInput} />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="電話" required onChange={this.handleChange('custMobile')} value={this.state.custMobile}  ref={this.phoneInput}/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="subject" placeholder="主題" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="問題" onChange={this.handleChange('custMsg')} value={this.state.custMsg}></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                            <button type="submit" className="btn-style-two" name="submit-form" onClick={this.habdleSubmit}>送出</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
    
        )

    }
}

export default CompanyContact;