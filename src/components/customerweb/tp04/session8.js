import React from 'react';
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

		return (
			
				<section id="contact" className="vc_row overflow-hidden" style={contactEnable? {} : {display: 'none'}}>

					<div className="lqd-particles-bg-wrap height-400px">

						<div className="ld-particles-container">
							<div
								className="ld-particles-inner"
								id="ld-1527244273759"
								data-particles="true"
								data-particles-options='{"particles":{"shape":{"type":["triangle"]},"move":{"enable":true,"direction":"right","out_mode":"out"}},"interactivity":[]}'>
							</div>
						</div>
		
					</div>

					<div className="container">
						<div className="row">

							<div className="lqd-column col-md-8 col-md-offset-2 text-center bg-white white-box-shadow pt-100 pb-10">

								<div className="row">
									<div className="col-md-10 col-md-offset-1">

										<header className="fancy-title mb-40 px-3">

											<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">Contact</h6>
											<h2 className="mt-1">聯絡我們</h2>
											<h2 className="mt-1">{emailMsg}</h2>
											
										</header>
			
										<div className="ld-sf ld-sf--input-solid ld-sf--button-solid ld-sf--size-lg ld-sf--circle ld-sf--border-thin ld-sf--input-shadow ld-sf--button-show">
											<form id="ld_subscribe_form" className="ld_sf_form" name="mc-embedded-subscribe-form" method="post">
												<p className="ld_sf_paragraph pr-2">
													<input type="text" className="ld_sf_text" id="mce-NAME" name="NAME" placeholder="姓名" required onChange={this.handleChange('custName')} value={this.state.custName} />
												</p>
												<p className="ld_sf_paragraph pr-2">
													<input type="email" className="ld_sf_text" id="mce-EMAIL" name="EMAIL" placeholder="Email" required onChange={this.handleChange('custMail')} value={this.state.custMail} />
												</p>
												<p className="ld_sf_paragraph pr-2">
													<input type="email" className="ld_sf_text" id="mce-TEL" name="TEL" placeholder="電話" required onChange={this.handleChange('custMobile')} value={this.state.custMobile} />
												</p>
												<p className="ld_sf_paragraph pr-2" rows="4">
													<input type="text" className="ld_sf_text" id="mce-MSG" name="MSG" placeholder="訊息" required onChange={this.handleChange('custMsg')} value={this.state.custMsg} />
												</p>																							
												<div className="lqd-column col-md-offset-3 col-md-6 text-md-right">
													<input type="submit" value="送出" className="font-size-16 text-uppercase ltr-sp-2 font-weight-semibold w-100" onClick={this.habdleSubmit} />
												</div>
											</form>
											<div className="ld_sf_response"></div>
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