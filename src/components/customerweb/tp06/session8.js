import React from 'react';
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
			
			<section id="contact" className="vc_row pt-25 pb-25 bg-gray" style={contactEnable? {} : {display: 'none'}}>
				<div className="container">
					<div className="row">

						<div className="lqd-column col-md-12 px-4 pt-25 pb-25 bg-white box-shadow-1">

							<div className="row d-flex flex-wrap align-items-center">

								<div className="lqd-column col-md-6 col-md-offset-1">

									<header className="fancy-title">
										<h2 className="text-left">聯絡我們</h2>
										<p>We are here to answer any question you may have</p>
										{/*<p>{emailMsg}</p>*/}
									</header>

								</div>

								

							</div>

							<div className="row">

								<div className="lqd-column col-md-10 col-md-offset-1">

									<div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
										<form method="post">
											<div className="row d-flex flex-wrap">
												<div className="lqd-column col-md-6 mb-20">
													<input className="lh-25 mb-30" type="text" name="name" aria-required="true" aria-invalid="false" placeholder="姓名" required onChange={this.handleChange('custName')} value={this.state.custName} />
													<input className="lh-25 mb-30" type="email" name="email" aria-required="true" aria-invalid="false" placeholder="Email" required onChange={this.handleChange('custMail')} value={this.state.custMail} ref={this.emailInput} />
													<input className="lh-25 mb-30" type="tel" name="mobile" aria-required="true" aria-invalid="false" placeholder="手機" required onChange={this.handleChange('custMobile')} value={this.state.custMobile} ref={this.phoneInput}/>
												</div>
												<div className="lqd-column col-md-6 mb-20">
													<textarea cols="10" rows="6" name="message" aria-required="true" aria-invalid="false" placeholder="訊息" required onChange={this.handleChange('custMsg')} value={this.state.custMsg} ></textarea>
												</div>												
												<div className="lqd-column col-md-6 text-md-right">
													<input type="submit" value="送出" className="font-size-17 ltr-sp-1 font-weight-bold" onClick={this.habdleSubmit}/>
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