import React from 'react';
import Msg from './msg';



class managerGeneralSetting extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            companyEName: '',
            keyword: '',
            description: '',
            email: '',
            img: ''
        };
    }
    

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
   
    }


    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        alert('儲存設定完畢');
    }


    render(){
        const { data, err, isLoading} = this.props.datatableReducer;
        let companyName = this.state.companyName ;
        let companyEName = this.state.companyEName ;
        let description = this.state.description ;
        let keyword = this.state.keyword ;
        let img = this.state.img ;
        let email = this.state.email;

        if(data){
            data.forEach(element => {
                companyName = companyName !=="" ? companyName : element.companyName;
                companyEName = companyEName !=="" ? companyEName : element.companyEName;
                description = description !=="" ? description : element.description;
                keyword = keyword !=="" ? keyword : element.keyword;
                img = img !=="" ? img : element.img;
                email = email !=="" ? email : element.email;
            })
        }


        return(
            <div className="container-fluid">
                <div className="card shadow">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">網站通用設定</h6>
                    </div>
                    <div className="card-body">
                        
                        <Msg type ='LOADING'  value = {isLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {err} text= 'Opps! Error : ' />
                   

                        <form id='dataForm'>
                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <label>公司名稱</label>
                                  <input type="text" className={`form-control`} id="companyName"  placeholder="公司名稱"   
                                    value={companyName} onChange={this.handleChange('companyName')} required />
                                  <div className="invalid-feedback">
                                         公司名稱不可以空白
                                  </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label>公司英文名稱</label>
                                  <input type="text" className={`form-control`} id="companyEN"  placeholder="公司英文名稱"
                                     value={companyEName} onChange={this.handleChange('companyEName')} required />
                                  <div className="invalid-feedback">
                                        公司英文名稱不可以空白
                                  </div>
                              </div>
                          </div>
                          <div className="form-row">
                                  <label>網站關鍵字</label>
                                  <textarea  className={`form-control`} id="webKeyWords"  placeholder="網站關鍵字"  
                                     value={keyword} onChange={this.handleChange('keyword')} />
                          </div>
                          <div className="form-row">
                                  <label>網站敘述</label>
                                  <textarea className={`form-control`} id="webDescription"  placeholder="網站敘述" 
                                    value={description} onChange={this.handleChange('description')} />
                          </div>
                          <div className="form-row">
                                  <label>聯絡我們 Email</label>
                                  <textarea className={`form-control`} id="Email"  placeholder="Email" 
                                    value={this.state.email.value} onChange={this.handleChange('email')} />
                          </div>
                          <div className="form-row">
                                <label>公司LOGO上傳</label>
                          </div>
                          <div className="form-row">
        
                                  <div className="card">
                                    <img src='/image/logo.png' className="card-img-top" alt="Logo" />
                                    <div className="card-body">
                                        <a href="/#" className="btn btn-primary">上傳 Logo</a>
                                    </div>
                                </div>
                          </div>
                          <hr />
                          <button className="btn btn-facebook btn-block" onClick={this.handleSubmit}><i className="fas fa-save"></i> 儲存設定</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

    
}

export default managerGeneralSetting;