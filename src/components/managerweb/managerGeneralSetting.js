import React from 'react';
import Msg from './msg';
import envConfig from '../../config/env';
import { Link } from 'react-router-dom';



class managerGeneralSetting extends React.Component{

    _isMounted = false;

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
            themeNum: ' ',
            styleType: ' ',
            uploadImg: ''
        };
 
    }
    

    componentDidMount(){
        this._isMounted = true;
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
        this.props.getkind01(cid);
   
    }

    componentWillUnmount() {
        this._isMounted = false;
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

            if(file.type.indexOf('png') < 0 ){
                alert('請上傳正確的圖片格式: png');
                return;
            }


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
                return "tp01blue.png";
            case "tp02blue.css":
                return "tp02blue.png";
            case "tp03blue.css":
                return "tp03blue.png";
            case "tp04blue.css":
                return "tp04blue.png";
            case "tp05blue.css":
                return "tp05blue.png";
            case "tp06blue.css":
                return "tp06blue.png";
            case "tp01green.css":
                return "tp01green.png";
            case "tp02green.css":
                return "tp02green.png";
            case "tp03green.css":
                return "tp03green.png";
            case "tp04green.css":
                return "tp04green.png";
            case "tp05green.css":
                return "tp05green.png";
            case "tp06green.css":
                return "tp06green.png";
            case "tp01orange.css":
                return "tp01orange.png";
            case "tp02orange.css":
                return "tp02orange.png";
            case "tp03orange.css":
                return "tp03orange.png";
            case "tp04orange.css":
                return "tp04orange.png";
            case "tp05orange.css":
                return "tp05orange.png";
            case "tp06orange.css":
                return "tp06orange.png";
            case "tp01purple.css":
                return "tp01purple.png";
            case "tp02purple.css":
                return "tp02purple.png";
            case "tp03purple.css":
                return "tp03purple.png";
            case "tp04purple.css":
                return "tp04purple.png";
            case "tp05purple.css":
                return "tp05purple.png";
            case "tp06purple.css":
                return "tp06purple.png";
            case "tp01red.css":
                return "tp01red.png";
            case "tp02red.css":
                return "tp02red.png";
            case "tp03red.css":
                return "tp03red.png";
            case "tp04red.css":
                return "tp04red.png";
            case "tp05red.css":
                return "tp05red.png";
            case "tp06red.css":
                return "tp06red.png";
            case "tp01yellow.css":
                return "tp01yellow.png";
            case "tp02yellow.css":
                return "tp02yellow.png";
            case "tp03yellow.css":
                return "tp03yellow.png";
            case "tp04yellow.css":
                return "tp04yellow.png";
            case "tp05yellow.css":
                return "tp05yellow.png";
            case "tp06yellow.css":
                return "tp06yellow.png";
            default:
                return "tp01blue.png";
        }

    }

    nextStepButton = (nextStep) =>{
        switch(nextStep){
            case "tp01":
                return "template1";
            case "tp02":
                return "template2";
            case "tp03":
                return "template3";
            case "tp04":
                return "template4";
            case "tp05":
                return "template5";
            case "tp06":
                return "template6";
            default:
                return "template1";
        }
    }

    buttonWord = (word) =>{
        switch(word){
            case "tp01":
                return "前往版型一";
            case "tp02":
                return "前往版型二";
            case "tp03":
                return "前往版型三";
            case "tp04":
                return "前往版型四";
            case "tp05":
                return "前往版型五";
            case "tp06":
                return "前往版型六";
            default:
                return "前往版型一";
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
        const kin01= kind01_data[0];
        
        if( kin01 ){

            if(kin01.oNo===Number(cid) && data.length ===0){
                companyName= companyName === ' '? kin01.Organ : companyName ;
                description= description === ' '? kin01.brief : description;
                email= email === ' '? kin01.Service[2] : email;
                title= title === ' '? kin01.Organ : title ;
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
        }

        let sampleImgURL = "/image/templatesample/" + this.sampleMapping(themeNum + styleType);
        let nextStepURL = `/managerweb/${cid}/` + this.nextStepButton(themeNum);
        let buttonWord = this.buttonWord(themeNum);

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
                                    <div className="height-sample"><img src={sampleImgURL} alt="Temp1_fullimg" width="100%"/></div>
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
                                  <input type="email" className="form-control" id="email"  value={email} onChange={this.handleChange('email')} aria-describedby="emailHelp" placeholder="Enter email" required/>
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
                                  <div className="invalid-feedback">
                                        網站敘述不可以空白
                                  </div>
                              </div>
                          </div>                          
                          <div className="form-row">
                                <label><span className='text-danger'>*</span> 公司LOGO上傳</label><em className='text-primary'>(圖檔尺寸大小為 104*32，接受格式為png)</em> 
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
                          <div className="form-row" align="center">
                            <div className="col-md-6 mb-3">
                                <button type='submit' id='action' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Link className="btn btn-facebook btn-block btn-width" to={{pathname:`${nextStepURL}`, state: { detail: 'login' }}}><i className="fas fa-share"></i> {buttonWord}</Link>
                            </div>
                          </div>
                        </form>

                    </div>
                </div>
            </div>
        )

    }

    
}

export default managerGeneralSetting;