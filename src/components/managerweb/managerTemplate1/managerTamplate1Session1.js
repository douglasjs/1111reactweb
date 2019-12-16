import React from 'react';

function Session1(){

    return(
        <div className="card shadow mb-4">
            <a href="#collapseCard1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard1">
            <h6 className="m-0 font-weight-bold text-primary">設定區段-公司標題</h6>
            </a>
            <div className="collapse show" id="collapseCard1">
            <div className="card-body">
                <h3>設定公司標題</h3>
                      <form id='dataForm'>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label>公司標題</label>
                                <input type="text" className={`form-control`} id="companyName" placeholder="公司名稱"
                                    value={this.state.companyName.value} onChange={this.handleChange('companyName')} required />
                                <div className="invalid-feedback">
                                    公司標題不可以空白
                                  </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>公司口號</label>
                                <input type="text" className={`form-control`} id="companyEN" placeholder="公司英文名稱"
                                    value={this.state.companyEN.value} onChange={this.handleChange('companyEN')} required />
                                <div className="invalid-feedback">
                                    公司口號不可以空白
                                  </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>網站關鍵字</label>
                            <textarea className={`form-control`} id="webKeyWords" placeholder="網站關鍵字"
                                value={this.state.webKeyWords.value} onChange={this.handleChange('webKeyWords')} />
                        </div>
                        <div className="form-row">
                            <label>網站敘述</label>
                            <textarea className={`form-control`} id="webDescription" placeholder="網站敘述"
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
export default Session1;