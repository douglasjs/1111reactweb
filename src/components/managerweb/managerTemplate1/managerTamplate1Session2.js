import React from 'react';

function Session2(){

    return(
        <div className="card shadow mb-4">
            <a href="#collapseCard2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
            <h6 className="m-0 font-weight-bold text-primary">設定區段-公司介紹</h6>
            </a>
            <div className="collapse show" id="collapseCard2">
            <div className="card-body">
                設定公司介紹
                <form id='dataForm'>
                     
                     <div className="form-row">
                         <label>主要標題</label>
                         <input type="text" className={`form-control`} id="companyName"  placeholder="主要標題"   
                                    value='' onChange='' required />
                     </div>
                     <div className="form-row">
                         <label>標題敘述</label>
                         <textarea className={`form-control`} id="titleDescription" placeholder="標題敘述"
                             value='' onChange=''/>
                     </div>
  
                     <div className="form-row">
                             <label>主要圖片上傳</label>
                     </div>
                     <div className="form-row">
     
                               <div class="card">
                                 <img src='/image/company-2.jpg' class="card-img-top" alt="Logo" />
                                 <div class="card-body">
                                     <a href="/#" className="btn btn-primary">上傳圖片</a>
                                 </div>
                             </div>
                     </div>
                     <div className="form-row">
                         <label>副標題 1</label>

                         <input type="text" className={`form-control`} id="companyName"  placeholder="副標題 1"  
                                    value='' onChange='' required />
                     </div>
                     <div className="form-row">
                         <label>副標題 1 敘述</label>
                         <textarea className={`form-control`} id="titleDes2" placeholder="副標題 1 敘述"
                             value='' onChange=''/>
                     </div>
                     <div className="form-row">
                         <label>副標題 2</label>
                         <input type="text" className={`form-control`} id="companyName"  placeholder="副標題 2"  
                                    value='' onChange='' required />
                     </div>
                     <div className="form-row">
                         <label>副標題 2 敘述</label>
                         <textarea className={`form-control`} id="titleDes2" placeholder="副標題 2 敘述"
                             value='' onChange=''/>
                     </div>       
                     <div className="form-row">
                         <label>副標題 3</label>
                         <input type="text" className={`form-control`} id="companyName"  placeholder="副標題 3"  
                                    value='' onChange='' required />
                     </div>
                     <div className="form-row">
                         <label>副標題 3 敘述</label>
                         <textarea className={`form-control`} id="titleDes2" placeholder="副標題 3 敘述"
                             value='' onChange=''/>
                     </div>                          
                     <hr />
                     <button className="btn btn-facebook btn-block" onClick=''><i className="fas fa-save"></i> 儲存設定</button>
                 </form>
            </div>
            </div>
       </div>
    )

}
export default Session2;