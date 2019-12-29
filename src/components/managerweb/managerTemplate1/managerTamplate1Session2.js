import React from 'react';
import Msg from '../msg';
import envConfig from '../../../config/env';

class Session2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            introTitle: ' ',
            introMainContent: ' ',
            introSubTitle1: ' ',
            introSubTitle1Content: ' ',
            introSubTitle1ImgText: ' ',
            introSubTitle1Img: ' ',
            introSubTitle1ImgUpload: '',
        }
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
                   if(img.width > 724 || img.height > 500){
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
    }


    
    render(){

        const { companyData, companyErr, companyIsLoading} = this.props.companyReducer;
  
     
        const cid = this.props.match.params.cid.trim();

        let introTitle = this.state.introTitle;
        let introMainContent = this.state.introMainContent;
        let introSubTitle1 = this.state.introSubTitle1;
        let introSubTitle1Content = this.state.introSubTitle1Content;
        let introSubTitle1ImgText = this.state.introSubTitle1ImgText;
        let introSubTitle1Img = this.state.introSubTitle1Img;
        let themeNum = 'tp01';
        let actionType = 'create';

         // image
         let introSubTitle1ImgUpload ="";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !==' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
         }


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
                    <h6 className="m-0 font-weight-bold text-primary">設定區段-公司介紹</h6>
                </a>
                <div className="collapse show" id="collapseCard2">
                    <div className="card-body">
                        <form id='dataForm2' className={companyIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <Msg type ='LOADING'  value = {companyIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {companyErr} text= 'Opps! Error : ' />
                            <input type="hidden" id="themeNum2" value={themeNum} />
                            <div className="form-row">
                                  <label><span className='text-danger'>*</span>公司介紹主標題 <em className='text-primary'>( 字數限制為15個字以內 )</em> </label>
                                  <input type="text" className={`form-control`} id="introTitle"  placeholder="公司介紹主標題"   
                                    value={introTitle} onChange={this.handleChange('introTitle')} required />
                                  <div className="invalid-feedback">
                                        公司介紹主標題不可以空白
                                  </div>
                            </div>
                            <div className="form-row">
                                  <label><span className='text-danger'>*</span>公司介紹主內容 <em className='text-primary'>( 字數限制為80個字以內 )</em> </label>
                                  <textarea className={`form-control`} id="introMainContent"  placeholder="公司介紹主內容" rows="5"
                                    value={introMainContent} onChange={this.handleChange('introMainContent')} required/>
                                  <div className="invalid-feedback">
                                        公司介紹主內容不可以空白
                                  </div>
                            </div>
                            <div className="form-row">
                                  <label><span className='text-danger'>*</span>小標題1 <em className='text-primary'>( 字數限制為11個字以內 )</em> </label>
                                  <input type="text" className={`form-control`} id="introSubTitle1"  placeholder="小標題1"   
                                    value={introSubTitle1} onChange={this.handleChange('introSubTitle1')} required />
                                  <div className="invalid-feedback">
                                        小標題1不可以空白
                                  </div>
                            </div>
                            <div className="form-row">
                                  <label><span className='text-danger'>*</span>小標題1內容 <em className='text-primary'>( 字數限制為55個字以內 )</em> </label>
                                  <textarea className={`form-control`} id="introSubTitle1Content"  placeholder="小標題1內容" rows="3"
                                    value={introSubTitle1Content} onChange={this.handleChange('introSubTitle1Content')} required/>
                                  <div className="invalid-feedback">
                                        小標題1內容不可以空白
                                  </div>
                            </div>
                            <div className="form-row">
                                  <label><span className='text-danger'>*</span>小標題1圖片文字  <em className='text-primary'>( 字數限制為20個字以內 )</em> </label>
                                  <input type="text" className={`form-control`} id="introSubTitle1ImgText"  placeholder="小標題1圖片文字"   
                                    value={introSubTitle1ImgText} onChange={this.handleChange('introSubTitle1ImgText')} required />
                                  <div className="invalid-feedback">
                                        小標題1圖片文字不可以空白
                                  </div>
                            </div>
                            <div className="form-row">
                                <label><span className='text-danger'>*</span> 小標題1圖片上傳</label><em className='text-primary'>(圖檔尺寸大小為 724*500 ，接受格式為png、jpg)</em> 
                            </div>
                            <div className="form-row">
                                  <div className="card image-area mt-4"><img id="introSubTitle1ImgResult" src={introSubTitle1ImgUpload} alt="For Upload" className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                                 
                                  <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                    <input type="hidden" id="companyBackgroundImg1" value={introSubTitle1Img} />
                                   
                                    <input id="introSubTitle1ImgUpload" type="file"  accept="image/*" onChange={this.handleFileUpload('introSubTitle1ImgUpload-label', 'introSubTitle1Img','introSubTitle1ImgUpload')} className="form-control border-0 uploadFile" />
                                    <label id="introSubTitle1ImgUpload-label" htmlFor="upload" className="font-weight-light text-muted upload-label">選擇檔案</label>
                                    <div className="input-group-append">
                                        <label htmlFor="introSubTitle1ImgUpload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                        <small className="text-uppercase font-weight-bold text-muted">選擇檔案</small></label>
                                    </div>
                                </div>
                             
                            </div>
                            <hr />
                            <button type='submit' id='action2' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                        </form>
                    </div>
                 </div>
           </div>
             
        )

    }


}
export default Session2;