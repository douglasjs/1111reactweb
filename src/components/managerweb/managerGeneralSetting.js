import React from 'react';
import Msg from './msg';
import envConfig from '../../config/env';



class managerGeneralSetting extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            companyName: ' ',
            companyEName: ' ',
            keyword: ' ',
            description: ' ',
            email: ' ',
            logoImg: ' ',
            title: ' ',
            themeNum: 'tp01',
            styleType: 'red.css',
            uploadImg: ''
        };
 
    }
    

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
        this.props.getkind01(cid);
   
    }

    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleFileUpload = (event) =>{
        const infoArea = document.getElementById( 'upload-label' );
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
                   if(img.width > 104 || img.height > 32){
                       alert('上傳圖片尺寸不合');
                       return false;
                   }else{

                        that.setState( {...this.state,
                            uploadImg: {
                                file: URL.createObjectURL(file),
                                value : reader.result
                            }
                        });
                        infoArea.textContent = '上傳檔案名稱: ' + file.name;
                        const fileFullName = "setting_logo_"+ file.name;
                        that.setState({ ...this.state, logoImg: fileFullName });

                   }
                };
           
            };

        }
       
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const cid = this.props.match.params.cid;

        if(event.target.companyName.value){
            if(event.target.companyName.value ===''){
                return false;
            }
        }
        if(event.target.companyEName.value){
            if(event.target.companyEName.value ===''){
                return false;
            }
        }
        if(event.target.themeNum.value){
            if(event.target.themeNum.value ===''){
                return false;
            }
        }
        if(event.target.styleType.value){
            if(event.target.styleType.value ===''){
                return false;
            }
        }

        if(event.target.email.value){
            if(event.target.email.value ===''){
                return false;
            }
        }

        if(event.target.logoImg.value){
            if(event.target.logoImg.value ===''){
                return false;
            }
        }


        if(event.target.action.value === 'create'){

            this.props.createData({
                ono: cid,
                companyName: event.target.companyName.value,
                companyEName: event.target.companyEName.value,
                themeNum:event.target.themeNum.value,
                styleType:event.target.styleType.value,
                email: event.target.email.value,
                description : event.target.description.value,
                keyword : event.target.keyword.value,
                title: event.target.title.value,
                logoImg: event.target.logoImg.value,
                uploadImg: this.state.uploadImg ? this.state.uploadImg.value : null,
               // uploadImg: this.state.uploadImg.value
    
            });

        }

        
        if(event.target.action.value === 'modify'){
   
            this.props.updateData({
                ono: cid,
                companyName: event.target.companyName.value,
                companyEName: event.target.companyEName.value,
                themeNum:event.target.themeNum.value,
                styleType:event.target.styleType.value,
                email: event.target.email.value,
                description : event.target.description.value,
                keyword : event.target.keyword.value,
                title: event.target.title.value,
                logoImg: event.target.logoImg.value,
                uploadImg: this.state.uploadImg.value
    
            });
 
        }

    }


    sampleMapping = (samplemap) =>{

        switch(samplemap){
            case "tp01blue.css":
                return "tp01blue.jpg";
            case "tp02blue.css":
                return "tp02blue.jpg";
            case "tp03blue.css":
                return "tp03blue.jpg";
            case "tp04blue.css":
                return "tp04blue.jpg";
            case "tp05blue.css":
                return "tp05blue.jpg";
            case "tp06blue.css":
                return "tp06blue.jpg";
            case "tp01green.css":
                return "tp01green.jpg";
            case "tp02green.css":
                return "tp02green.jpg";
            case "tp03green.css":
                return "tp03green.jpg";
            case "tp04green.css":
                return "tp04green.jpg";
            case "tp05green.css":
                return "tp05green.jpg";
            case "tp06green.css":
                return "tp06green.jpg";
            case "tp01orange.css":
                return "tp01orange.jpg";
            case "tp02orange.css":
                return "tp02orange.jpg";
            case "tp03orange.css":
                return "tp03orange.jpg";
            case "tp04orange.css":
                return "tp04orange.jpg";
            case "tp05orange.css":
                return "tp05orange.jpg";
            case "tp06orange.css":
                return "tp06orange.jpg";
            case "tp01purple.css":
                return "tp01purple.jpg";
            case "tp02purple.css":
                return "tp02purple.jpg";
            case "tp03purple.css":
                return "tp03purple.jpg";
            case "tp04purple.css":
                return "tp04purple.jpg";
            case "tp05purple.css":
                return "tp05purple.jpg";
            case "tp06purple.css":
                return "tp06purple.jpg";
            case "tp01red.css":
                return "tp01red.jpg";
            case "tp02red.css":
                return "tp02red.jpg";
            case "tp03red.css":
                return "tp03red.jpg";
            case "tp04red.css":
                return "tp04red.jpg";
            case "tp05red.css":
                return "tp05red.jpg";
            case "tp06red.css":
                return "tp06red.jpg";
            case "tp01yellow.css":
                return "tp01yellow.jpg";
            case "tp02yellow.css":
                return "tp02yellow.jpg";
            case "tp03yellow.css":
                return "tp03yellow.jpg";
            case "tp04yellow.css":
                return "tp04yellow.jpg";
            case "tp05yellow.css":
                return "tp05yellow.jpg";
            case "tp06yellow.css":
                return "tp06yellow.jpg";
            default:
                return "tp01blue.jpg";
        }

    }



    render(){
        const { data, err, isLoading} = this.props.datatableReducer;
        const { kind01_data} = this.props.kind01Reducer;
        const cid = this.props.match.params.cid.trim();
     

        let companyName = this.state.companyName;
        let companyEName = this.state.companyEName;
        let description = this.state.description;
        let keyword = this.state.keyword ;
        let email = this.state.email;
        let title = this.state.title;
        let logoImg = this.state.logoImg;
        let themeNum = this.state.themeNum;
        let styleType = this.state.styleType;
        let actionType = 'create';
        
        if( kind01_data ){

            if(kind01_data.oNo===Number(cid) && data.length ===0){
                console.log("t2")
                companyName= companyName === ' '? kind01_data.Organ : companyName ;
                description= description === ' '? kind01_data.brief : description;
                email= email === ' '? kind01_data.Service[2] : email;
                title= title === ' '? kind01_data.Organ : title ;
            }
        }

        if(data && data.length > 0){
            actionType = 'modify';
            data.forEach(element => {
                companyName = companyName !==" " ? companyName : element.companyName;
                companyEName = companyEName !==" " ? companyEName : element.companyEName;
                description = description !==" " ? description : element.description;
                keyword = keyword !==" " ? keyword : element.keyword;
                title = title !==" " ? title : element.title;
                email = email !==" " ? email : element.email;
                logoImg = logoImg !==" " ? logoImg : element.logoImg;
                themeNum = themeNum !==" " ? themeNum : element.themeNum;
                styleType = styleType !== " " ? styleType : element.styleType;
            })
        }
 
        //const UploadImg = this.state.uploadImg !=='' ?  this.state.uploadImg.file : `/upload/${cid}/${themeNum}/${logoImg}`;
        let UploadImg ="";
        if(logoImg === " "){
           UploadImg = "/image/logo-1111.png";
        }else{
           UploadImg = this.state.uploadImg !=='' ?  this.state.uploadImg.file : `${envConfig.WebAPI}/image/${cid}?fileName=${logoImg}`;
<<<<<<< HEAD
        }      
        
=======
        }

        let sampleImgURL = "/image/templatesample/" + this.sampleMapping(themeNum + styleType);

>>>>>>> ae95def7ea03b35b1edf545c06870e3d61721f47
        return(
            <div className="container-fluid">
                <div className="card shadow">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">網站通用設定 (<span className='text-danger'>*</span> 為必填欄位)</h6>
                    </div>
                    <div className="card-body">
                   
                        <Msg type ='LOADING'  value = {isLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {err} text= 'Opps! Error : ' />
                  

                        <form id='dataForm' className={isLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>

                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                <div className="form-row mangerweb-pb-1">
                                    <label><span className='text-danger'>*</span> 選用版型</label>
                                    <select  className="form-control" id="themeNum" value={themeNum} onChange={this.handleChange('themeNum')} required>
                                            <option value=''>選擇版型...</option>
                                            <option value='tp01'>版型一</option>
                                            <option value='tp02'>版型二</option>
                                            <option value='tp03'>版型三</option>
                                            <option value='tp04'>版型四</option>
                                            <option value='tp05'>版型五</option>
                                            <option value='tp06'>版型六</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label><span className='text-danger'>*</span> 選用版型色系</label>
                                    <select  className="form-control" id="styleType" value={styleType} onChange={this.handleChange('styleType')} required>
                                            <option value=''>選擇版型色系...</option>
                                            <option value='blue.css'>藍色系</option>
                                            <option value='green.css'>綠色系</option>
                                            <option value='orange.css'>橘色系</option>
                                            <option value='purple.css'>紫色系</option>
                                            <option value='red.css'>紅色系</option>
                                            <option value='yellow.css'>黃色系</option>
                                    </select>
                                </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                    <div><img src={sampleImgURL} alt="Temp1_fullimg" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp1_fullimg">觀看放大圖例</a></div>
                              </div>
                              <div className="modal fade" id="tmp1_fullimg">
                                    <div className="modal-dialog sample-img-width">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <p className="modal-title">版型一 範例</p>
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div className="modal-body text-center">
                                                <img src={sampleImgURL} alt="tmp1_fullimg" width="100%" />
                                            </div>
                                            <div className="modal-footer">
                                                <p className="small">範例僅供參考</p>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                          </div>
                          

                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <label><span className='text-danger'>*</span> 公司名稱</label>
                                  <input type="text" className={`form-control`} id="companyName"  placeholder="公司名稱"   
                                    value={companyName} onChange={this.handleChange('companyName')} required />
                                  <div className="invalid-feedback">
                                         公司名稱不可以空白
                                  </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label><span className='text-danger'>*</span> 公司英文名稱</label>
                                  <input type="text" className={`form-control`} id="companyEName"  placeholder="公司英文名稱"
                                     value={companyEName} onChange={this.handleChange('companyEName')} required />
                                  <div className="invalid-feedback">
                                        公司英文名稱不可以空白
                                  </div>
                              </div>
                          </div>
                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <label>網站標題</label>
                                  <input  className={`form-control`} id="title"  placeholder="網站標題"
                                     value={title} onChange={this.handleChange('title')} />
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label><span className='text-danger'>*</span> 聯絡我們 Email</label>
                                  <input className={`form-control`} id="email"  placeholder="email" 
                                    value={email} onChange={this.handleChange('email')} required/>
                              </div>                                  
                          </div>
                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <label>網站關鍵字</label>
                                  <textarea  className={`form-control`} id="keyword"  placeholder="網站關鍵字"  
                                     value={keyword} onChange={this.handleChange('keyword')} />
                              </div>
                              <div className="col-md-6 mb-3">
                                  <label>網站敘述</label>
                                  <textarea className={`form-control`} id="description"  placeholder="網站敘述" rows="5"
                                    value={description} onChange={this.handleChange('description')} />
                              </div>
                          </div>                          
                          <div className="form-row">
                                <label><span className='text-danger'>*</span> 公司LOGO上傳</label><em className='text-primary'>(圖檔尺寸大小為 104*32，接受格式為png、jpg)</em> 
                          </div>
                          <div className="form-row">
                              <div className="col-md-6 mb-3">
                                  <div className="card image-area mt-4"><img id="imageResult" src={UploadImg} alt="For Upload" className="img-fluid rounded shadow-sm mx-auto d-block" /></div>
                                 
                                  <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                    <input type="hidden" id="logoImg" value={logoImg} />
                                   
                                    <input id="upload" type="file"  accept="image/*" onChange={this.handleFileUpload} className="form-control border-0 uploadFile" />
                                    <label id="upload-label" htmlFor="upload" className="font-weight-light text-muted upload-label">選擇檔案</label>
                                    <div className="input-group-append">
                                        <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                        <small className="text-uppercase font-weight-bold text-muted">選擇檔案</small></label>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <hr />
                          <div  align="center">
                            <button type='submit' id='action' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                          </div>
                        </form>

                    </div>
                </div>
            </div>
        )

    }

    
}

export default managerGeneralSetting;