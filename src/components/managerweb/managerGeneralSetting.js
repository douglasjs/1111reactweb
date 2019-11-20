import React from 'react';
import Msg from './msg';



class managerGeneralSetting extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            companyName: '永豐餘生技',
            companyEN: '',
            webKeyWords: '1111,永豐餘生技,人力,徵才',
            webDescription: '永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。&nbsp;1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。'
        };
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

        return(
            <div className="container-fluid">
                <div className="card shadow">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">網站通用設定</h6>
                    </div>
                    <div className="card-body">
                        {/* 
                        <Msg type ='LOADING'  value = {isLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {err} text= 'Opps! Error : ' />
                        */}
                        <form id='dataForm'>
                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <label>公司名稱</label>
                                  <input type="text" className={`form-control`} id="companyName"  placeholder="公司名稱"   
                                    value={this.state.companyName.value} onChange={this.handleChange('companyName')} required />
                                  <div className="invalid-feedback">
                                         公司名稱不可以空白
                                  </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label>公司英文名稱</label>
                                  <input type="text" className={`form-control`} id="companyEN"  placeholder="公司英文名稱"
                                     value={this.state.companyEN.value} onChange={this.handleChange('companyEN')} required />
                                  <div className="invalid-feedback">
                                        公司英文名稱不可以空白
                                  </div>
                              </div>
                          </div>
                          <div className="form-row">
                                  <label>網站關鍵字</label>
                                  <textarea  className={`form-control`} id="webKeyWords"  placeholder="網站關鍵字"  
                                     value={this.state.webKeyWords.value} onChange={this.handleChange('webKeyWords')} />
                          </div>
                          <div className="form-row">
                                  <label>網站敘述</label>
                                  <textarea className={`form-control`} id="webDescription"  placeholder="網站敘述" 
                                    value={this.state.webDescription.value} onChange={this.handleChange('webDescription')} />
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