import React from 'react';
import Msg from '../msg';
import envConfig from '../../../config/env';

class Session1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title: ' ',
            companySubTitle1: ' ',
            companySubTitle2: ' ',
            companyBackgroundImg1: ' ',
            uploadImg1:'',
            companyBackgroundImg2: ' ',
            uploadImg2:''
        };
    }


    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleFileUpload = (name, stateName, uploadName) => event =>{
        const infoArea = document.getElementById(name);
        const input = event.target;
   

        if (input.files && input.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                
                const img = new Image();
                const that = this;
                img.src=reader.result;

                img.onload = function() {
                   if(img.width > 1920 || img.height > 1200){
                       alert('上傳圖片尺寸不合');
                       return false;
                   }else{

                        that.setState( {...this.state,
                            [uploadName]: {
                                file: URL.createObjectURL(file),
                                value : reader.result
                            }
                        });
                        infoArea.textContent = '上傳檔案名稱: ' + file.name;
                        const fileFullName = stateName + "_"+ file.name;
                        that.setState({ ...this.state, [stateName]: fileFullName });

                   }
                };


           
            };

        }

       
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        if(event.target.title.value){
            if(event.target.title.value ===' '){
                return false;
            }
        }
        if(event.target.companySubTitle1.value){
            if(event.target.companySubTitle1.value ===' '){
                return false;
            }
        }
        /*
        if(event.target.companyBackgroundImg1.value){
            if(event.target.companyBackgroundImg1.value ===' '){
                return false;
            }
        }
        */


        if(event.target.action1.value === 'create'){

            this.props.createCompany({
                ono: cid,
                themeNum : event.target.themeNum.value,
                title: event.target.title.value,
                companySubTitle1: event.target.companySubTitle1.value,
                companySubTitle2: event.target.companySubTitle2.value,
                companyBackgroundImg1:event.target.companyBackgroundImg1.value,
                companyBackgroundImg2:event.target.companyBackgroundImg2.value,
                uploadImg1: this.state.UploadImg1 ? this.state.UploadImg1.value : null,
                uploadImg2: this.state.UploadImg2 ? this.state.UploadImg2.value : null
    
            });

        }

        
        if(event.target.action1.value === 'modify'){
   
   
            this.props.updateCompany({
                ono: cid,
                themeNum : event.target.themeNum.value,
                title: event.target.title.value,
                companySubTitle1: event.target.companySubTitle1.value,
                companySubTitle2: event.target.companySubTitle2.value,
                companyBackgroundImg1:event.target.companyBackgroundImg1.value,
                companyBackgroundImg2:event.target.companyBackgroundImg2.value,
                uploadImg1: this.state.UploadImg1 ? this.state.UploadImg1.value : null,
                uploadImg2: this.state.UploadImg2 ? this.state.UploadImg2.value : null
    
            });
 
        }



       

    }
    
    render(){
        const { companyData, companyErr, companyIsLoading} = this.props.companyReducer;
  
     
        const cid = this.props.match.params.cid.trim();

        let title = this.state.title;
        let companySubTitle1 = this.state.companySubTitle1;
        let companySubTitle2 = this.state.companySubTitle2;
        let companyBackgroundImg1 = this.state.companyBackgroundImg1;
        let companyBackgroundImg2 = this.state.companyBackgroundImg2;
        let themeNum = 'tp01';
        let actionType = 'create';

        if(companyData && companyData.length > 0){
            actionType = 'modify';
            companyData.forEach(element => {
                title = title !==" " ? title : element.title;
                companySubTitle1 = companySubTitle1 !==" " ? companySubTitle1 : element.companySubTitle1;
                companySubTitle2 = companySubTitle2 !==" " ? companySubTitle2 : element.companySubTitle2;
                companyBackgroundImg1 = companyBackgroundImg1 !==" " ? companyBackgroundImg1 : element.companyBackgroundImg1;
                companyBackgroundImg2 = companyBackgroundImg2 !==" " ? companyBackgroundImg2 : element.companyBackgroundImg2;

            })
        }

        // image
        let UploadImg1 ="";
        if(companyBackgroundImg1 === " "){
           UploadImg1 = "/image/logo-1111.png";
        }else{
           UploadImg1 = this.state.companyBackgroundImg1 !==' ' ?  this.state.UploadImg1.file : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        }
        let UploadImg2 ="";
        if(companyBackgroundImg2 === " "){
           UploadImg2 = "/image/logo-1111.png";
        }else{
           UploadImg2 = this.state.companyBackgroundImg2 !==' ' ?  this.state.UploadImg2.file : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;
        }


       


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard1">
                    <h6 className="m-0 font-weight-bold text-primary">設定區段-公司標題</h6>
                </a>
                <div className="collapse show" id="collapseCard1">
                    <div className="card-body">
                    <form id='dataForm1' className={companyIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                        <Msg type ='LOADING'  value = {companyIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {companyErr} text= 'Opps! Error : ' />
                        <input type="hidden" id="themeNum" value={themeNum} />
                        <div className="form-row">
                                  <label><span className='text-danger'>*</span>大標題 <em className='text-primary'>( 字數限制為5個字以內 )</em> </label>
                                  <input type="text" className={`form-control`} id="title"  placeholder="大標題"   
                                    value={title} onChange={this.handleChange('title')} required />
                                  <div className="invalid-feedback">
                                        大標題不可以空白
                                  </div>
                        </div>
                        <div className="form-row">
                                  <label><span className='text-danger'>*</span>副標題 1 <em className='text-primary'>( 字數限制為40個字以內 )</em> </label>
                                  <textarea className={`form-control`} id="companySubTitle1"  placeholder="副標題 1" rows="3"
                                    value={companySubTitle1} onChange={this.handleChange('companySubTitle1')} required/>
                                  <div className="invalid-feedback">
                                        副標題不可以空白
                                  </div>
                        </div>
                        <div className="form-row">
                                  <label>副標題 2 <em className='text-primary'>( 字數限制為40個字以內 )</em> </label>
                                  <textarea className={`form-control`} id="companySubTitle2"  placeholder="副標題 2" rows="3"
                                    value={companySubTitle2} onChange={this.handleChange('companySubTitle2')} />
                        </div>
                        <div className="form-row">
                                <label><span className='text-danger'>*</span> 副標題1 背景圖片上傳</label><em className='text-primary'>(圖檔尺寸大小為 1080*540 ，接受格式為png、jpg)</em> 
                        </div>
                        <div className="form-row">
                                  <div className="card image-area mt-4"><img id="imageResult" src={UploadImg1} alt="For Upload" className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                                 
                                  <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                    <input type="hidden" id="companyBackgroundImg1" value={companyBackgroundImg1} />
                                   
                                    <input id="upload1" type="file"  accept="image/*" onChange={this.handleFileUpload('upload-label1', 'companyBackgroundImg1','UploadImg1')} className="form-control border-0 uploadFile" />
                                    <label id="upload-label1" htmlFor="upload" className="font-weight-light text-muted upload-label">選擇檔案</label>
                                    <div className="input-group-append">
                                        <label htmlFor="upload1" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                        <small className="text-uppercase font-weight-bold text-muted">選擇檔案</small></label>
                                    </div>
                                </div>
                             
                        </div>
                        <div className="form-row">
                                <label> 副標題2 背景圖片上傳</label><em className='text-primary'>(圖檔尺寸大小為 1080*540 ，接受格式為png、jpg)</em> 
                        </div>
                        <div className="form-row">
                                  <div className="card image-area mt-4"><img id="imageResult" src={UploadImg2} alt="For Upload" className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                                 
                                  <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                    <input type="hidden" id="companyBackgroundImg2" value={companyBackgroundImg2} />
                                   
                                    <input id="upload2" type="file"  accept="image/*" onChange={this.handleFileUpload('upload-label2', 'companyBackgroundImg2','UploadImg2')} className="form-control border-0 uploadFile" />
                                    <label id="upload-label2" htmlFor="upload" className="font-weight-light text-muted upload-label">選擇檔案</label>
                                    <div className="input-group-append">
                                        <label htmlFor="upload2" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                        <small className="text-uppercase font-weight-bold text-muted">選擇檔案</small></label>
                                    </div>
                                </div>
                             
                        </div>
                        <hr />
                        <button type='submit' id='action1' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                    </form>
                    </div>
                </div>
            </div>


        )
    

    }


  
}
export default Session1;