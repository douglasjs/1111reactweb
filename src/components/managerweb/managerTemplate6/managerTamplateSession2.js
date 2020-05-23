import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
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
            introSubTitle1ImgUpload : ''
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

            intro1ImgUpload : null,
            intro1Img : '',
            intro2ImgUpload : null,
            intro2Img : '',
            intro3ImgUpload : null,
            intro3Img : '',
            intro4ImgUpload: null,
            intro4Img : '',
            intro5ImgUpload: null,
            intro5Img : '',
            intro6ImgUpload: null,
            intro6Img : '',
            intro7ImgUpload: null,
            intro7Img : '',
            intro8ImgUpload: null,
            intro8Img : '',
            intro9ImgUpload: null,
            intro9Img : '',
            intro10ImgUpload: null,
            intro10Img : '',
            introImgEnable : false
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
        
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !== "" ? introTitle : element.introTitle;
                introMainContent = introMainContent !== "" ? introMainContent : element.introMainContent;
                introSubTitle1 = introSubTitle1 !== "" ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Img = introSubTitle1Img !== " " ? introSubTitle1Img : element.introSubTitle1Img;
            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === ' ' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
            if(introSubTitle1 === ''){
                introSubTitle1 = `https://www.1111.com.tw/corp/${cid}/`;
            }
        }

         // image
         let introSubTitle1ImgUpload = "";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !== ' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
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
                                        <InputText title='主標題' notice='(字數限制為11個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='11' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(字數限制為140個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='5' stateObj={this} required={true} checkValue='140' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='了解更多網址' notice='(請輸入網址)' inputName='introSubTitle1' inputState={introSubTitle1}
                                            stateObj={this} required={true} checkValue='200' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片 上傳' notice='(圖檔尺寸大小為 1120*600，接受格式為png、jpg)' objName='introSubTitle1Img' imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={1120} imgH={600} required={true} />                                               
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