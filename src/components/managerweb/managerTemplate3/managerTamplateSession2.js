import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import InputSwitch from '../../sharecomponents/inputSwitch';
import Msg from '../msg';
import envConfig from '../../../config/env';
import {strNumLimite} from '../../sharecomponents/toolFunction';

class Session2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            introTitle : '',
            introMainContent : '',
            introSubTitle1 : '',
            introSubTitle1Img : ' ',
            introSubTitle1ImgUpload : '',
            introImgEnable : '',
            intro1Img : ' ',
            intro2Img : ' ',
            intro3Img : ' ',
            intro4Img : ' ',
            intro5Img : ' ',
            intro6Img : ' ',
            intro7Img : ' ',
            intro8Img : ' ',
            intro9Img : ' ',
            intro10Img : ' ',            
            intro1ImgUpload : '',
            intro2ImgUpload : '',            
            intro3ImgUpload : '',            
            intro4ImgUpload : '',            
            intro5ImgUpload : '',            
            intro6ImgUpload : '',            
            intro7ImgUpload : '',            
            intro8ImgUpload : '',            
            intro9ImgUpload : '',            
            intro10ImgUpload : ''            
        }
    }

    /*handleChange = name => event => {
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
    }*/

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid.trim();

        const submitObj={
            ono : cid,
            themeNum : event.target.themeNum2.value,
            introTitle : event.target.introTitle.value,
            introMainContent : event.target.introMainContent.value,
            introSubTitle1 : event.target.introSubTitle1.value,
            introSubTitle1Content : '',
            introSubTitle1ImgText : '',
            introSubTitle1Img : event.target.introSubTitle1Img.value,
            introSubTitle1ImgUpload : this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,
            introSubTitle2 : '',
            introSubTitle2Content : '',
            introSubTitle2ImgText : '',
            introSubTitle2Img : '',
            introSubTitle2ImgUpload : null,
            introSubTitle3 : '',
            introSubTitle3Content : '',
            introSubTitle3ImgText : '',
            introSubTitle3Img : '',
            introSubTitle3ImgUpload : null,     
            introImgEnable : false,       
            intro1Img : event.target.intro1Img.value,
            intro2Img : event.target.intro2Img.value,
            intro3Img : event.target.intro3Img.value,
            intro4Img : event.target.intro4Img.value,
            intro5Img : event.target.intro5Img.value,
            intro6Img : event.target.intro6Img.value,
            intro7Img : event.target.intro7Img.value,
            intro8Img : event.target.intro8Img.value,
            intro9Img : event.target.intro9Img.value,
            intro10Img : event.target.intro10Img.value,
            intro1ImgUpload : this.state.intro1ImgUpload ? this.state.intro1ImgUpload.value : null,
            intro2ImgUpload : this.state.intro2ImgUpload ? this.state.intro2ImgUpload.value : null,            
            intro3ImgUpload : this.state.intro3ImgUpload ? this.state.intro3ImgUpload.value : null,            
            intro4ImgUpload : this.state.intro4ImgUpload ? this.state.intro4ImgUpload.value : null,            
            intro5ImgUpload : this.state.intro5ImgUpload ? this.state.intro5ImgUpload.value : null,            
            intro6ImgUpload : this.state.intro6ImgUpload ? this.state.intro6ImgUpload.value : null,            
            intro7ImgUpload : this.state.intro7ImgUpload ? this.state.intro7ImgUpload.value : null,            
            intro8ImgUpload : this.state.intro8ImgUpload ? this.state.intro8ImgUpload.value : null,            
            intro9ImgUpload : this.state.intro9ImgUpload ? this.state.intro9ImgUpload.value : null,            
            intro10ImgUpload : this.state.intro10ImgUpload ? this.state.intro10ImgUpload.value : null
        }

        if(event.target.action2.value === 'create'){
            this.props.createintroduction(submitObj);            
        }
        if(event.target.action2.value === 'modify'){
            this.props.updateintroduction(submitObj);            
        }
    }
    
    render(){

        const { introductionData, introductionErr, introductionIsLoading} = this.props.introductionReducer;
        const { kind01_data } = this.props.kind01Reducer;

        const cid = this.props.match.params.cid.trim();

        let introTitle = this.state.introTitle;
        let introMainContent = this.state.introMainContent;
        let introSubTitle1 = this.state.introSubTitle1;
        let introSubTitle1Img = this.state.introSubTitle1Img;
        
        let intro1Img = this.state.intro1Img;
        let intro2Img = this.state.intro2Img;
        let intro3Img = this.state.intro3Img;
        let intro4Img = this.state.intro4Img;
        let intro5Img = this.state.intro5Img;
        let intro6Img = this.state.intro6Img;
        let intro7Img = this.state.intro7Img;
        let intro8Img = this.state.intro8Img;
        let intro9Img = this.state.intro9Img;
        let intro10Img = this.state.intro10Img;
        
        let introImgEnable = this.state.introImgEnable;
        
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !== "" ? introTitle : element.introTitle;
                introMainContent = introMainContent !== "" ? introMainContent : element.introMainContent;
                introSubTitle1 = introSubTitle1 !== "" ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Img = introSubTitle1Img !== " " ? introSubTitle1Img : element.introSubTitle1Img;

                introImgEnable = introImgEnable !== "" ? introImgEnable : element.introImgEnable;
                intro1Img = intro1Img !== " " ? intro1Img : element.intro1Img;
                intro2Img = intro2Img !== " " ? intro2Img : element.intro2Img;
                intro3Img = intro3Img !== " " ? intro3Img : element.intro3Img;
                intro4Img = intro4Img !== " " ? intro4Img : element.intro4Img;
                intro5Img = intro5Img !== " " ? intro5Img : element.intro5Img;
                intro6Img = intro6Img !== " " ? intro6Img : element.intro6Img;
                intro7Img = intro7Img !== " " ? intro7Img : element.intro7Img;
                intro8Img = intro8Img !== " " ? intro8Img : element.intro8Img;
                intro9Img = intro9Img !== " " ? intro9Img : element.intro9Img;
                intro10Img = intro10Img !== " " ? intro10Img : element.intro10Img;
            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === ' ' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
        }

         // image
         let introSubTitle1ImgUpload = "";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !== ' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
         }

         let intro1ImgUpload = "";
         if(intro1Img === " "){
            intro1ImgUpload = "/image/logo-1111.png";
         }else{
            intro1ImgUpload = this.state.intro1Img !== ' ' ?  this.state.intro1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro1Img}`;
         }

         let intro2ImgUpload = "";
         if(intro2Img === " "){
            intro2ImgUpload = "/image/logo-1111.png";
         }else{
            intro2ImgUpload = this.state.intro2Img !==' ' ?  this.state.intro2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro2Img}`;
         }

         let intro3ImgUpload = "";
         if(intro3Img === " "){
            intro3ImgUpload = "/image/logo-1111.png";
         }else{
            intro3ImgUpload = this.state.intro3Img !==' ' ?  this.state.intro3ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro3Img}`;
         }

         let intro4ImgUpload ="";
         if(intro4Img === " "){
            intro4ImgUpload = "/image/logo-1111.png";
         }else{
            intro4ImgUpload = this.state.intro4Img !==' ' ?  this.state.intro4ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro4Img}`;
         }

         let intro5ImgUpload ="";
         if(intro5Img === " "){
            intro5ImgUpload = "/image/logo-1111.png";
         }else{
            intro5ImgUpload = this.state.intro5Img !==' ' ?  this.state.intro5ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro5Img}`;
         }

         let intro6ImgUpload ="";
         if(intro6Img === " "){
            intro6ImgUpload = "/image/logo-1111.png";
         }else{
            intro6ImgUpload = this.state.intro6Img !==' ' ?  this.state.intro6ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro6Img}`;
         }

         let intro7ImgUpload ="";
         if(intro7Img === " "){
            intro7ImgUpload = "/image/logo-1111.png";
         }else{
            intro7ImgUpload = this.state.intro7Img !==' ' ?  this.state.intro7ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro7Img}`;
         }

         let intro8ImgUpload ="";
         if(intro8Img === " "){
            intro8ImgUpload = "/image/logo-1111.png";
         }else{
            intro8ImgUpload = this.state.intro8Img !==' ' ?  this.state.intro8ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro8Img}`;
         }

         let intro9ImgUpload ="";
         if(intro9Img === " "){
            intro9ImgUpload = "/image/logo-1111.png";
         }else{
            intro9ImgUpload = this.state.intro9Img !==' ' ?  this.state.intro9ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro9Img}`;
         }

         let intro10ImgUpload ="";
         if(intro10Img === " "){
            intro10ImgUpload = "/image/logo-1111.png";
         }else{
            intro10ImgUpload = this.state.intro10Img !==' ' ?  this.state.intro10ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${intro10Img}`;
         }


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard2" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
                    <h6 className="m-0 font-weight-bold">設定區段-公司介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard2">
                    <div className="card-body">
                        <form id='dataForm2' className={introductionIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <Msg type ='LOADING'  value = {introductionIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {introductionErr} text= 'Opps! Error : ' />
                            <input type="hidden" id="themeNum2" value={themeNum} />

                            <div><img src="/image/sample_01/02.png" alt="Temp1_Company" width="50%"/></div>
                            <div><a type="button" data-toggle="modal" href="#tmp1_company">觀看放大圖例</a></div>
                            <hr />

                            <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                            
                            <div className="form-row">

                                <div className="col-md-6 mb-3">
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='公司介紹主標題' notice='(字數限制為16個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='16' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='公司介紹小標題' notice='(字數限制為12個字以內)' inputName='introSubTitle1' inputState={introSubTitle1}
                                            stateObj={this} required={true} checkValue='12' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='公司介紹主內容' notice='(字數限制為100個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='5' stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='公司介紹圖片 上傳' notice='(圖檔尺寸大小為 480*370，接受格式為png、jpg)' objName='introSubTitle1Img' imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={480} imgH={370} required={true} />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">                                    
                                    <div><img src="/image/sample_01/02-1.png" alt="Temp1_Company_title" width="100%"/></div>
                                    <hr />
                                    <div>
                                        <table border='1'>
                                            <thead>
                                            <tr>
                                                <th width="10%">項目</th>
                                                <th width="35%">內容範例</th>
                                                <th width="15%">規格</th>
                                                <th width="40%">備註</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>主標題</td>
                                                <td align='left'>永豐餘品牌對人與環境的永續經營</td>
                                                <td>15個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>主內容</td>
                                                <td align='left'>本公司擁有優秀的經營團隊，秉持著『◆安心宣言◆生態平衡◆達人堅持』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提昇，是國內績優廠商之一。</td>
                                                <td>80個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp1_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02.png" alt="tmp1_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-1">
                                        <div className="card-header text-white bg-primary">圖片輪播區</div>
                                    </a>                                    
                                    <div className="card-body collapse show" id="collapseCard2-1">
                                        <div className="form-row">
                                            
                                            <div className="col-md-12 mb-6">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputSwitch sessionName="圖片輪播" inputName='introImgEnable' inputState={introImgEnable} stateObj={this} />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片1 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro1Img' imgUpload={intro1ImgUpload} 
                                                        imgFileName={intro1Img} parentObj={this} imgW={300} imgH={200} required={false} />
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片2 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro2Img'  imgUpload={intro2ImgUpload} 
                                                        imgFileName={intro2Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片3 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro3Img'  imgUpload={intro3ImgUpload} 
                                                        imgFileName={intro3Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片4 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro4Img'  imgUpload={intro4ImgUpload} 
                                                        imgFileName={intro4Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片5 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro5Img'  imgUpload={intro5ImgUpload} 
                                                        imgFileName={intro5Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片6 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro6Img'  imgUpload={intro6ImgUpload} 
                                                        imgFileName={intro6Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片7 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro7Img'  imgUpload={intro7ImgUpload} 
                                                        imgFileName={intro7Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片8 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro8Img'  imgUpload={intro8ImgUpload} 
                                                        imgFileName={intro8Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片9 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro9Img'  imgUpload={intro9ImgUpload} 
                                                        imgFileName={intro9Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">                                                
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='圖片10 上傳' notice='(圖檔尺寸大小為 300*200，接受格式為png、jpg)' objName='intro10Img'  imgUpload={intro10ImgUpload} 
                                                        imgFileName={intro10Img} parentObj={this} imgW={300} imgH={200} required={false} />                                               
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            

                            <hr />
                            <div align="center">
                                <button type='submit' id='action2' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                            </div>
                        </form>
                    </div>
                 </div>
           </div>
             
        )

    }


}
export default Session2;